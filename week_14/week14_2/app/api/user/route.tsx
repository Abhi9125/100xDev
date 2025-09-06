import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const res = await req.json();

  console.log("save body");

  return NextResponse.json({
    message: "Body data is save",
  });
}
