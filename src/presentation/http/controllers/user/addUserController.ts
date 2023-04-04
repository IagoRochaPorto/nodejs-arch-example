import { HttpRequest, HttpResponse } from "@/presentation/http/protocols";
import { BaseController } from "../baseController";
import { AddUser } from "@/modules/user/useCases";

interface UserBody {
    name: string
    email: string
    password: string
    age: number
}

export class AddUserController extends BaseController {
    constructor(private readonly addUserService: AddUser) {
        super()
    }

    protected async perform(req: HttpRequest<UserBody>, res: Response): Promise<HttpResponse> {
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