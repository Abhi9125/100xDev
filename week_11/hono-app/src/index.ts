import { Hono } from "hono";

const app = new Hono();

app.post("/", async (c) => {
  const body: any = await c.req.json();

  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  return c.text("Hello dsfd!");
});

export default app;
