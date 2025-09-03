import { withAccelerate } from "@prisma/extension-accelerate";
import { PrismaClient } from "../generated/prisma/edge";
import { Hono } from "hono";
import { verify } from "hono/jwt";
import { createBlogInput, updateBlogInput } from "100x-zod-common";
export const BlogPostRoute = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_TOKENS: string;
  };
  Variables: {
    userId: string;
  };
}>();

// MiddleWare to Handle authentication
BlogPostRoute.use("/*", async (c, next) => {
  const header = c.req.header("Authorization") || "";

  const token = header.split(" ")[1];

  try {
    const response = await verify(token, c.env.JWT_TOKENS);

    if (response.id) {
      c.set("userId", String(response.id));
      await next();
    } else {
      c.status(403);
      return c.json({ error: "unauthorized" });
    }
  } catch (e) {
    c.status(403);
    return c.json({ err: e });
  }
});

// Create post table
BlogPostRoute.post("/", async (c) => {
  const userId = c.get("userId");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();

  const { success } = createBlogInput.safeParse(body);

  if (!success) {
    c.status(400);
    return c.json({ error: "invalid input" });
  }
  try {
    const post = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: userId,
      },
    });
    return c.json({
      id: post.id,
    });
  } catch (err) {
    return c.json({ error: (err as Error).message });
  }
});

// Update the table data
BlogPostRoute.put("/", async (c) => {
  const userId = c.get("userId");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();

  const { success } = updateBlogInput.safeParse(body);

  if (!success) {
    c.status(400);
    return c.json({ error: "invalid input" });
  }
  try {
    const post = await prisma.post.update({
      where: {
        id: body.id,
      },
      data: {
        title: body.title,
        content: body.title,
      },
    });
    return c.json({
      title: post.title,
      content: post.content,
    });
  } catch (err) {
    return c.json({ error: (err as Error).message });
  }
});

// Get Data in bulk
BlogPostRoute.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const posts = await prisma.post.findMany({
    select: {
      content: true,
      title: true,
      id: true,
      author: {
        select: {
          name: true,
        },
      },
    },
  });

  return c.json(posts);
});

// Get pertucular data from table
BlogPostRoute.get("/:id", async (c) => {
  const id = c.req.param("id");
  console.log(id);

  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const post = await prisma.post.findFirst({
    where: {
      id: id,
    },
  });

  return c.json({
    post,
  });
});
