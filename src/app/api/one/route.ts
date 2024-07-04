import { NextRequest, NextResponse } from "next/server";
import { obj } from "@/globals/index.js";
export function GET(req: NextRequest) {
  obj.one = true;
  return NextResponse.json(
    {
      message: "route 1",
      obj: obj,
    },
    {
      status: 201,
    }
  );
}
