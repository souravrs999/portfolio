import client from "@/lib/mongodb";

export async function GET(req: Request) {
  try {
    const viewCounts = await client
      .db()
      .collection("viewCount")
      .find()
      .toArray();
    return Response.json(viewCounts);
  } catch (err) {
    return Response.json(
      { error: err || "Internal Server error" },
      { status: 500 }
    );
  }
}
