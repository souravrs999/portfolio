import client from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const slug = params.slug;
    const data = await client.db().collection("viewCount").findOne({ slug });
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { error: err || "Internal Server error" },
      { status: 500 }
    );
  }
}

export async function POST(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const slug = params.slug;
    const data = await client.db().collection("viewCount").findOne({ slug });

    if (!data) {
      client.db().collection("viewCount").insertOne({ slug, views: 1 });
    } else {
      await client
        .db()
        .collection("viewCount")
        .updateOne({ slug }, { $set: { views: data.views + 1 } });
    }
    return NextResponse.json("view count updated");
  } catch (err) {
    return NextResponse.json(
      { error: err || "Internal Server error" },
      { status: 500 }
    );
  }
}
