import { UpdateUser } from "./../../../../src/modules/user/useCases/updateUser"

function makeSut() {
  const mockedUpdateUserRepository = {
    update: jest.fn(() => Promise.resolve({
      id: 1,
      name: 'John Doe',
      email: 'any_emai',
      age: 25
    }))
  }
  const sut = new UpdateUser(mockedUpdateUserRepository)

  return {
    mockedUpdateUserRepository,
    sut
  }
}

describe('Update User', () => {
  it('Should call updateUserRepository with correct value', async () => {
    const { mockedUpdateUserRepository, sut } = makeSut()
    const spy = jest.spyOn(mockedUpdateUserRepository, 'update')

    await sut.execute({
      id: 1,
      data: {}
    })

    expect(spy).toHaveBeenCalledWith({
      id: 1,
      data: {}
    })
  })
})