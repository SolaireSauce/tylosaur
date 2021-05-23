import { exampleGlobalMiddleware } from "./exampleGlobalMiddleware.ts";
import { exampleWebMiddleware } from "./exampleWebMiddleware.ts";
import { exampleApiMiddleware } from "./exampleApiMiddleware.ts";

const middleware = {
  global: [
    exampleGlobalMiddleware,
  ],

  web: [
    exampleWebMiddleware,
  ],

  api: [
    exampleApiMiddleware,
  ],
};

export default middleware;
