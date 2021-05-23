import { env } from "../deps.ts";

export const viewEngineConfig: ViewEngineConfig = {
  use: env("VIEW_ENGINE","eta"),
  viewRoot: env("VIEW_ROOT","resources/views"),
  fileExtsion: env("VIEW_EXT",".eta"),
  // partialDirs: ["resources/views/partials"],
};

type ViewEngineConfig = {
  use: "eta" | "ejs";
  fileExtsion: ".eta" | ".ejs";
  viewRoot: string;
  // partialDirs: string[]
};
