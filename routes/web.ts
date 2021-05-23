import { Request, Response, Router } from "../deps.ts";

const router = new Router();

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

router.get("/", (_req: Request, res: Response) => {
  res.render("index", { name: "Tylosaur" });
});

export default router;
