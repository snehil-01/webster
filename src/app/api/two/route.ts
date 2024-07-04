import { NextRequest, NextResponse } from "next/server";
import { obj } from "@/globals/index.js";
export function GET(req: NextRequest) {
  obj.two = true;
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
