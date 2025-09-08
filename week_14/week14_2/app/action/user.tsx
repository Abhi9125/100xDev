"use server";
import { prisma } from "@/db";
export async function signup(username: string, password: string) {
  try {
    const userInfo = await prisma.user.create({
      data: {
        username: username,
        password: password,
      },
    });
    return true;
  } catch {
    return false;
  }
}
