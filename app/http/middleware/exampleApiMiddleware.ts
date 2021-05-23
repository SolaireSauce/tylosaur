import { Middleware } from "../../../deps.ts";

export const exampleApiMiddleware: Middleware = async (_req, _res, next) => {
  console.log("Route in api group got called.");
  await next();
};
