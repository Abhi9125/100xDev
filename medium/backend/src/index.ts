import { Hono } from "hono";
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
