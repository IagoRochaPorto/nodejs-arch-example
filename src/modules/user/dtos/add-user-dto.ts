export namespace AddUserDto {
  export interface Request {
    name: string
    age: number
    email: string
    password: string
  }

  export interface Response {
    id: number
  }
}
