import { Controller } from "@/presentation/http/protocols";
import { Request, Response } from "express";

export function expressControllerAdapter(controller: Controller) {
  return async (req: Request, res: Response) => {
    const httpResponse = await controller.execute(req, res);
    res.status(httpResponse.statusCode).json(httpResponse.body);
  };
}