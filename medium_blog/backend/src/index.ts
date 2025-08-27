import { Hono } from "hono";
import { PrismaClient } from "./generated/prisma/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
const app = new Hono();

app.get("/api", (c) => {
  return c.text("Done");
});
app.post("/api/v1/signup", async (c) => {
  const prisma = new PrismaClient({
    // @ts-ignore
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  try {
    const createUser = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
      },
    });
    return c.text("Done");
  } catch (err) {
    return c.json({ error: (err as Error).message });
  }
});

app.post("/api/v1/signin", (c) => {
  return c.text("signin route");
});

app.get("/api/v1/blog/:id", (c) => {
  return c.text("get blog route");
});

app.post("/api/v1/blog", (c) => {
  return c.text("signin route");
});

app.put("/api/v1/blog", (c) => {
  return c.text("signin route");
});

export default app;
