import { AddUserDto } from "../dtos";

export interface AddUserRepository {
  add(user: AddUserRepository.Params): AddUserRepository.Result
}

export namespace AddUserRepository {
  export type Params = AddUserDto.Request
  export type Result = Promise<AddUserDto.Response>
}
