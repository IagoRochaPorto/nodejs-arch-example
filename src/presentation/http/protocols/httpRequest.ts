export interface HttpRequest<Body = any, Params = any, Query = any> {
    body?: Body
    params?: Params
    query?: Query
    headers?: any
}
