export const viewEngineConfig: ViewEngineConfig = {
  use: "eta",
  viewRoot: "resources/views",
  fileExtsion: ".eta",
  // partialDirs: ["resources/views/partials"],
};

type ViewEngineConfig = {
  use: "eta" | "ejs";
  fileExtsion: ".eta" | ".ejs";
  viewRoot: string;
  // partialDirs: string[]
};
