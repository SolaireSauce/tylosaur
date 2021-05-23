import { Request, Response, Router } from "../deps.ts";

const router = new Router();

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

router.get("/info", (_req: Request, res: Response) => {
  res.json({
    version: "0.0.1",
  });
});

export default router;
