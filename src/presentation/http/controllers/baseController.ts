import { HttpRequest, HttpResponse, Controller } from "../protocols"

export abstract class BaseController<Request extends HttpRequest = HttpRequest, Response extends HttpResponse = HttpResponse> implements Controller {
  public async execute(req: Request): Promise<HttpResponse> {
    const result = await this.perform(req)
    return {
      statusCode: result.statusCode,
      body: result.body
    }
  }

  protected abstract perform(req: Request): Promise<Response>
}
