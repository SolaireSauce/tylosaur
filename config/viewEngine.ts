import { env, ViewEngineConfig } from "../deps.ts";

export const viewEngineConfig: ViewEngineConfig = {
  use: env("VIEW_ENGINE", "eta"),
  viewRoot: env("VIEW_ROOT", "resources/views"),
  fileExtsion: env("VIEW_EXT", ".eta"),
};
