import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,

  { params }: { params: Promise<{ nextauth: string[] }> }
) {
  const { nextauth } = await params;
  console.log(nextauth);
  return NextResponse.json({
    message: "Hello",
  });
}
