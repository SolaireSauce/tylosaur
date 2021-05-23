import { RouteServiceProvider } from "./routeServiceProvider.ts";
import { ViewEngineServiceProvider } from "./viewEngineServiceProvider.ts";
import { DatabaseServiceProvider } from "./databaseServiceProvider.ts";

const serviceProviders = [
  ViewEngineServiceProvider,
  RouteServiceProvider,
  DatabaseServiceProvider,
];
// TODO: Do we want to split providers in maybe 3 folders one for framework specific, one for 3rd party providers and one for self written?
export default serviceProviders;
