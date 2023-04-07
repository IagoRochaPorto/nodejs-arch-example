import { Router } from "express";
import { makeUserRouterFactory } from "./userRoutes";

export function makeRouterFactory() {
  const router = Router()

  router.use('/user', makeUserRouterFactory())

  return router
}
