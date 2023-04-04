import { AddUserRepository } from "@/modules/user/repositories"
import { dataSource } from "../appDataSource"
import { UserEntity } from '../entities'

export class UserRepository implements AddUserRepository {
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
}
