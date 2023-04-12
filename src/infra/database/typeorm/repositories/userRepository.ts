import { AddUserRepository, UpdateUserRepository } from "@/modules/user/repositories"
import { dataSource } from "../appDataSource"
import { UserEntity } from '../entities'
import { UpdateUserDto } from "@/modules/user/dtos/updateUserDto"
import { User } from "@/modules/user/models"

export class UserRepository implements AddUserRepository, UpdateUserRepository {
	async add(user: AddUserRepository.Params): AddUserRepository.Result {
		const connection = dataSource.getRepository(UserEntity)

		const savedEntity = await connection.save({
			age: user.age,
			email: user.email,
			name: user.name,
			password: user.password
		})

		return { id: savedEntity.id }
	}

	async update(user: UpdateUserDto.Request): UpdateUserRepository.Result {

		return new Promise<Omit<User, 'password'>>(resolve => {
			dataSource.transaction(async ctx => {
				const connection = ctx.getRepository(UserEntity)

				const { affected } = await connection.update({ id: user.id }, user.data)

				if (affected) {
					const updatedUser = await connection.findOne({ where: { id: user.id } })
					if (updatedUser) {
						return resolve(updatedUser)
					}
				}

				throw new Error('Not found')
			})
		})
	}
}
