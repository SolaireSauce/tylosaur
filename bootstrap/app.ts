import { Tylosaur, config } from "../deps.ts";
import serviceProviders from "../app/providers/index.ts";

/*
|--------------------------------------------------------------------------
| Create The Application
|--------------------------------------------------------------------------
|
| The first thing we will do is create a new Tylosaur application instance
| which serves as the "glue" for all the components of Tylosaur.
|
*/

// Create application
const tylosaur = new Tylosaur(config());

/*
|--------------------------------------------------------------------------
| Service Providers
|--------------------------------------------------------------------------
|
| Here, we add the service providers to the application and execute the
| boot as well as the register method on every service proivder.
|
*/

tylosaur.registerServiceProviders(serviceProviders);

export default tylosaur;
