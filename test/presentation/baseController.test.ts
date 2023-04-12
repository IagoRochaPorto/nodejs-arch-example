import { BaseController } from "./../../src/presentation/http/controllers/baseController"

function makeSut() {
  class Sut extends BaseController {
    async perform(): Promise<any> {
      return {
        statusCode: 200,
        body: { id: 1 }
      }
    }
  }
  const sut = new Sut()
  return { sut }
}

describe('BaseController', () => {
  it('should call perform method with correct values', async () => {
    const { sut } = makeSut()
    const performSpy = jest.spyOn(sut, 'perform')

    await sut.execute({ body: { name: 'any_name' } })

    expect(performSpy).toHaveBeenCalledWith({ body: { name: 'any_name' } })
  })
})
