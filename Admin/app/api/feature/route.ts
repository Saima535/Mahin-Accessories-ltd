import { connectToDB } from "@/lib/connectToDB";
import { FeatureSection } from "@/lib/models/Feature";
import { NextResponse } from "next/server";

export async function GET() {
  await connectToDB();
  const feature = await FeatureSection.find();
  const response = NextResponse.json(feature);
  // response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set(
    "Access-Control-Allow-Origin",
    "https://maheen-accessories-ltd-public.vercel.app",
  );
  return response;
}

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Connect to the database
    await connectToDB();
    await FeatureSection.create(data);
    return NextResponse.json({ message: "Data created" }, { status: 201 });
  } catch (error) {
    console.error("Error creating data:", error);
    return NextResponse.json(
      { message: "Failed to create data" },
      { status: 500 },
    );
  }
}
