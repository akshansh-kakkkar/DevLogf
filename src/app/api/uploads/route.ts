import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";
export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    if (!file) {
      return NextResponse.json({ error: "File Required" }, { status: 400 });
    }
    if (!file.type.startsWith("image/")) {
      return NextResponse.json(
        {
          error: "Only images are allowed",
        },
        { status: 400 },
      );
    }
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const result = await new Promise<any>((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: "posts",
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          },
        )
        .end(buffer);
    });
    return NextResponse.json({url : result.secure_url})
  } catch (error) {
    return NextResponse.json({ error: "Upload Failed" }, { status: 500 });
  }
}
