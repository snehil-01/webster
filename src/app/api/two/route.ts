import { NextRequest, NextResponse } from "next/server";
import { obj } from "@/constants";
import { connectDB } from "@/lib/connectDB";
export async function GET(req: NextRequest) {
  obj.two = true;
  await connectDB();
  return NextResponse.json(
    {
      message: "route 2",
      obj: obj,
    },
    {
      status: 201,
    }
  );
}
