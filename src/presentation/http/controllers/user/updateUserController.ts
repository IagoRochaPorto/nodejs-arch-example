import { UpdateUser } from "@/modules/user/useCases/updateUser";
import { BaseController } from "../baseController";
import { HttpRequest, HttpResponse } from "../../protocols";

interface UserBody {
  name?: string
  email?: string
  age?: number
}

interface UserParams {
  id: string
}

export class UpdateUserController extends BaseController {
  constructor(private readonly updateUserService: UpdateUser) {
    super()
  }

  protected async perform(req: HttpRequest<UserBody, UserParams>, res: HttpResponse): Promise<HttpResponse> {
    const { body, params } = req

    if (!body) {
      throw new Error('Should have a body')
    }

    const id = params?.id
    if (!params?.id) {
      throw new Error('Should have an id')
    }

    const updatedUser = await this.updateUserService.execute({
      id: parseInt(params.id),
      data: {
        age: body.age,
        email: body.email,
        name: body.name
      }
    })

    return {
      statusCode: 200,
      body: { id: updatedUser.data.id }
    }
  }
}