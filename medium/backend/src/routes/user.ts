import { withAccelerate } from "@prisma/extension-accelerate";
import { PrismaClient } from "../generated/prisma/edge";
import { Hono } from "hono";
import { sign } from "hono/jwt";
import { signupInput, signinInput } from "100x-zod-common";

export const user = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_TOKENS: string;
  };
}>();
user.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();

  const { success } = signupInput.safeParse(body);

  if (!success) {
    c.status(400);
    return c.json({ error: "invalid input" });
  }
  try {
    const createUser = await prisma.user.create({
      data: {
        email: body.email,
        name: body.name,
        password: body.password,
      },
    });

    const token = await sign({ id: createUser.id }, c.env.JWT_TOKENS);
    return c.json({
      token,
    });
  } catch (err) {
    return c.json({ error: (err as Error).message });
  }
});

user.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();

  const { success } = signinInput.safeParse(body);

  if (!success) {
    c.status(400);
    return c.json({ error: "invalid input" });
  }

  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (!user) {
    c.status(403);
    return c.json({
      error: "user not found",
    });
  }

  const token = await sign({ id: user.id }, c.env.JWT_TOKENS);
  return c.json({ token });
});
