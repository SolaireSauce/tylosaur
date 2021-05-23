import { RouteServiceProvider } from "./routeServiceProvider.ts";
import { ViewEngineServiceProvider } from "./viewEngineServiceProvider.ts";
import { DatabaseServiceProvider } from "./databaseServiceProvider.ts";

const serviceProviders = [
  ViewEngineServiceProvider,
  RouteServiceProvider,
  DatabaseServiceProvider,
];

export default serviceProviders;
