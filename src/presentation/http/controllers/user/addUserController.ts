import { HttpRequest, HttpResponse } from "@/presentation/http/protocols";
import { BaseController } from "../baseController";
import { UseCase } from "@/shared/types";
import { AddUserDto } from "@/modules/user/dtos";

interface UserBody {
  name: string
  email: string
  password: string
  age: number
}

type Request = HttpRequest<UserBody>
type Response = HttpResponse<{ id: number }>

export class AddUserController extends BaseController<Request, Response> {
  constructor(private readonly addUserService: UseCase<AddUserDto.Request, AddUserDto.Response>) {
    super()
  }

  protected async perform(req: Request): Promise<Response> {
    const { body } = req

    if (!body) {
      throw new Error('Should have a body')
    }

    const savedUser = await this.addUserService.execute({
      age: body.age,
      email: body.email,
      name: body.name,
      password: body.password
    })

    return {
      statusCode: 201,
      body: { id: savedUser.id }
    }
  }
}
