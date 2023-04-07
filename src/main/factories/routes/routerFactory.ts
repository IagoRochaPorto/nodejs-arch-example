import { Router } from "express";
import { userRoutes } from '@/presentation/http/routes'
import { expressControllerAdapter } from "@/infra/http/express/expressControllerAdapter";
import * as UserControllers from "@/main/factories/controllers/user/addUserController";

export function makeRouterFactory() {
  const router = Router()

  for (const userRoute of userRoutes) {
    const controller = UserControllers[userRoute.controller]
    router[userRoute.method](userRoute.path, expressControllerAdapter(controller()))
  }

  return router
}
