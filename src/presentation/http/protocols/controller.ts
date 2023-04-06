import { HttpRequest } from "./httpRequest";
import { HttpResponse } from "./httpResponse";

export interface Controller {
  execute(req: HttpRequest, res: HttpResponse): Promise<HttpResponse>
}
