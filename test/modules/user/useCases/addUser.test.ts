import { AddUser } from "./../../../../src/modules/user/useCases/addUser"

const params = {
  name: 'John Doe',
  email: 'any@email.com',
    password: 'any_password',
    age: 25,
}

const makeSut = () => {
  const mockedAddUserRepository = {
    add: jest.fn(() => Promise.resolve({ id: 'any_id' }))
  }
  const mockedEncrypter = {
    encrypt: jest.fn(() => Promise.resolve('any_encrypted_password'))
  }
  const sut = new AddUser(mockedAddUserRepository, mockedEncrypter)

  return {
    mockedAddUserRepository,
    mockedEncrypter,
    sut
  }
}

describe('Add User', () => {
  it('Should call encrypter with correct value', async () => {
    const {sut, mockedEncrypter } = makeSut()
    const spy = jest.spyOn(mockedEncrypter, 'encrypt')

    await sut.execute(params)

    expect(spy).toHaveBeenCalledWith('any_password')
  })

  it('Should call addUserRepository with correct value', async () => {
    const {sut, mockedAddUserRepository } = makeSut()
    const spy = jest.spyOn(mockedAddUserRepository, 'add')

    await sut.execute(params)  

    expect(spy).toHaveBeenCalledWith({
      name: 'John Doe',
      email: 'any@email.com',
      password: 'any_encrypted_password',
      age: 25,
    })
  })

  it('Should return an user with correct id', async () => {
    const { sut } = makeSut()

    const user = await sut.execute(params)  

    expect(user.id).toBe('any_id')
  })
})