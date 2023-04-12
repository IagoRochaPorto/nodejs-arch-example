import { User } from "../models";

export namespace UpdateUserDto {
  export interface Request {
    id: number,
    data: Partial<Omit<User, 'id' | 'password'>>
  }

  export interface Response {
    data: Omit<User, 'password'>
  }
}
