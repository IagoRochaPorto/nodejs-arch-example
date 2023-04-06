import { HttpRequest, HttpResponse, Controller } from "../protocols"

export abstract class BaseController implements Controller {
  public async execute(req: HttpRequest, res: HttpResponse): Promise<HttpResponse> {
    const result = await this.perform(req, res)
    return {
      statusCode: result.statusCode,
      body: result.body
    }
  }

  protected abstract perform(req: HttpRequest, res: HttpResponse): Promise<HttpResponse>
}
