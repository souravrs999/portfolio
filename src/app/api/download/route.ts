import path from "path";
import fs from "fs";

export async function GET() {
  const filePath = path.resolve(".", "public/resume/sourav-resume.pdf");
  const fileBuffer = fs.readFileSync(filePath);

  const headers = new Headers();
  headers.append("Content-Type", "application/pdf");
  headers.append(
    "Content-Disposition",
    'attachment; filename="sourav-resume.pdf"'
  );
  return new Response(fileBuffer, { headers });
}
