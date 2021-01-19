import { IRoute } from './../interfaces/IRoute';
import { DataServiceInstance } from '../services/data.service';


export const generalRoutes: IRoute[] = [
  {
    path: '/api/rates',
    method: 'get',
    handlers: [DataServiceInstance.getRateHandler]
  },
  {
    path: '**',
    method: 'get',
    handlers: [DataServiceInstance.unknownRouteHandler]
  }
];