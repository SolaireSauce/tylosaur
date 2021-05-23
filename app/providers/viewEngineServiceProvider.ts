import { renderFile, renderFileToString, ServiceProvider } from "../../deps.ts";
import { viewEngineConfig } from "../../config/viewEngine.ts";

export class ViewEngineServiceProvider extends ServiceProvider {
  register(): void {
    //
  }

  boot(): void {
    // TODD: (D)ejs does not support partials with relative path to view yet -> cache partials through partial dir
    const renderMethod = viewEngineConfig.use === "ejs"
      ? renderFileToString
      : renderFile;
    this.tylosaur.app.set("view engine", viewEngineConfig.use);
    this.tylosaur.app.engine(viewEngineConfig.fileExtsion, renderMethod);
    this.tylosaur.app.set(
      "views",
      Deno.cwd() + "/" + viewEngineConfig.viewRoot,
    );
  }
}
