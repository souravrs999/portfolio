import client from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const viewCounts = await client
      .db()
      .collection("viewCount")
      .find()
      .toArray();
    return NextResponse.json(viewCounts);
  } catch (err) {
    return NextResponse.json(
      { error: err || "Internal Server error" },
      { status: 500 }
    );
  }
}
