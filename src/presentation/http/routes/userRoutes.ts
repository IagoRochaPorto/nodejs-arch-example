import { Route } from '../protocols'

export const userRoutes = [{
  method: 'post',
  path: '/',
  controller: 'addUserController' as const
}] satisfies Route[]

