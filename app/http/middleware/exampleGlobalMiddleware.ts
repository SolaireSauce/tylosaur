import { Middleware } from "../../../deps.ts";

export const exampleGlobalMiddleware: Middleware = async (_req, _res, next) => {
  console.log("A route just got requested.");
  await next();
};
