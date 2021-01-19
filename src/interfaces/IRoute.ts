export interface IRoute {
  method: 'get' | 'post' | 'patch' | 'put' | 'delete';
  path: string;
  handlers: any[]
}