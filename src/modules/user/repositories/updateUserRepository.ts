import { UpdateUserDto } from "../dtos/updateUserDto"
import { User } from "../models"

export interface UpdateUserRepository {
  update(user: UpdateUserRepository.Params): UpdateUserRepository.Result
}

export namespace UpdateUserRepository {
  export type Params = UpdateUserDto.Request
  export type Result = Promise<Omit<User, 'password'>>
}
