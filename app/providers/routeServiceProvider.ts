import { Router, serveStatic, ServiceProvider } from "../../deps.ts";
import apiRoutes from "../../routes/api.ts";
import webRoutes from "../../routes/web.ts";
import middleware from "../http/middleware/index.ts";

export class RouteServiceProvider extends ServiceProvider {
  register(): void {
    //
  }

  boot(): void {
    const router = Router();

    middleware.global.forEach((element) => router.use(element));

    middleware.api.forEach((element) => router.use("/api", element));
    router.use("/api", apiRoutes);

    middleware.web.forEach((element) => router.use("/", element));
    router.use("/", webRoutes);

    this.tylosaur.app.use(router);

    this.tylosaur.app.use(serveStatic(`public`, {
      index: false,
    }));
  }
}
