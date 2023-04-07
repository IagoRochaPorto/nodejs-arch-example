import { Router } from "express";
import { userRoutes } from "@/presentation/http/routes";
import * as UserControllers from "@/main/factories/controllers/user/addUserController";
import { expressControllerAdapter } from "@/infra/http/express/expressControllerAdapter";

export function makeUserRouterFactory() {
  const router = Router()

  for (const userRoute of userRoutes) {
    const controller = UserControllers[userRoute.controller]
    router[userRoute.method](userRoute.path, expressControllerAdapter(controller()))
  }

  return router
}
