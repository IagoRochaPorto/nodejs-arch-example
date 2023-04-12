import { AddUserController } from "./../../src/presentation/http/controllers/user/addUserController";
import { UseCase } from "@/shared/types";
import { AddUserDto } from "@/modules/user/dtos";

function makeSut() {
  const mockedAddUserService: UseCase<AddUserDto.Request, AddUserDto.Response> = {
    execute: jest.fn(() => Promise.resolve({ id: 1 }))
  }
  const sut = new AddUserController(mockedAddUserService)

  return {
    mockedAddUserService,
    sut
  }
}

describe('AddUserController', () => {
  it('Should call addUserService with correct values', async () => {
    const { mockedAddUserService, sut } = makeSut()
    const spy = jest.spyOn(mockedAddUserService, 'execute')

    await sut.execute({
      body: {
        age: 1,
        email: 'any_email',
        name: 'any_name',
        password: 'any_password'
      }
    })

    expect(spy).toBeCalledTimes(1)
    expect(spy).toHaveBeenCalledWith({
      age: 1,
      email: 'any_email',
      name: 'any_name',
      password: 'any_password'
    })
  })

  it('Should throw if body is empty', async () => {
    const { sut } = makeSut()

    const response = sut.execute({})

    await expect(response).rejects.toThrow(new Error('Should have a body'))
  })
})