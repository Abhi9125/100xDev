import { Hono } from "hono";
import { PrismaClient } from "./generated/prisma/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from "hono/jwt";
import { user } from "./routes/user";
const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  };
}>();

app.get("/api/v1/blog/:id", (c) => {
  return c.text("get blog route");
});

app.post("/api/v1/blog", (c) => {
  return c.text("signin route");
});

app.put("/api/v1/blog", (c) => {
  return c.text("signin route");
});

app.route("/api/v1", user);
// app.route("/v1/blog", blog);
export default app;
