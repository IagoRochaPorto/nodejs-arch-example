import { HttpRequest, HttpResponse } from "../protocols"

export abstract class BaseController {
  public async execute(req: HttpRequest, res: Response): Promise<HttpResponse> {
    const result = await this.perform(req, res)
    return {
      statusCode: result.statusCode,
      body: result.body
    }
  }

  protected abstract perform(req: HttpRequest, res: Response): Promise<HttpResponse>
}