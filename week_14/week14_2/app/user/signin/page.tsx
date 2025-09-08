import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/app/generated/prisma";

const prisma = new PrismaClient();

// async function getData() {
//   try {
//     const res = await axios.get("http://localhost:3000/api/user");
//     const data = await res.data;
//     return data;
//   } catch (e) {
//     console.log(e);
//   }
// }
async function getData() {
  const res = await prisma.user.findFirst();

  return res;
}
export default async function signin() {
  const getUserDetails = await getData();
  console.log(getUserDetails);
  return (
    <div>
      {getUserDetails !== null ? <div>{getUserDetails.username}</div> : ""}
    </div>
  );
}
