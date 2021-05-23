import tylosaur from "./bootstrap/app.ts";

const app = tylosaur.app;

const port = 3000;

app.listen(
  port,
  () => console.log("server has started on http://localhost:3000 🚀"),
);
