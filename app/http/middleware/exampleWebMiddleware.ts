import { Middleware } from "../../../deps.ts";

export const exampleWebMiddleware: Middleware = async (_req, _res, next) => {
  console.log("Route in web group got called.");
  await next();
};
