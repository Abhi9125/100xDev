import { Hono } from "hono";
import { PrismaClient } from "./generated/prisma/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from "hono/jwt";
import { user } from "./routes/user";
import { BlogPostRoute } from "./routes/blog";
const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  };
}>();

app.route("/api/v1/user", user);
app.route("api/v1/blog", BlogPostRoute);
export default app;
