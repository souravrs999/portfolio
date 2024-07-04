import client from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const blogs = await client
      .db()
      .collection("viewCount")
      .find({ type: "blog" })
      .sort({ views: -1 })
      .limit(4)
      .toArray();
    return NextResponse.json(blogs);
  } catch (err) {
    return NextResponse.json(
      { error: err || "Internal Server Error." },
      { status: 500 }
    );
  }
}
