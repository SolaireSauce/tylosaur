import { superdeno } from "../../deps.ts";
import { createApplication } from "../createApplication.ts";

Deno.test("Example feature test", async () => {
  const request = await superdeno(createApplication());
  await request.get("/api/info")
    .expect(200)
    .expect("Content-Type", /json/)
    .expect(200)
    .expect('{"version":"0.0.1"}')
    .end((err, _res) => {
      if (err) throw err;
    });
});
