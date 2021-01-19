import { Router } from "express";
import { IRoute } from "../interfaces/IRoute";

export const routesLoader = (router: Router, allRoutes: IRoute[]): void => {
  for (const route of allRoutes) {
    const { path, method, handlers } = route;

    router[method](path, handlers);
  }
}