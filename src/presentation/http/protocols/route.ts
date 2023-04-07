export interface Route {
  path: string
  method: 'get' | 'post' | 'put' | 'delete',
  controller: string
}