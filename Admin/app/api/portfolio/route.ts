import { connectToDB } from "@/lib/connectToDB";
import { PortfolioSection } from "@/lib/models/Portfolio";
import { NextResponse } from "next/server";

export async function GET() {
  await connectToDB();
  const photos = await PortfolioSection.find();
  const response = NextResponse.json(photos);
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
    await PortfolioSection.create(data);
    return NextResponse.json({ message: "Data created" }, { status: 201 });
  } catch (error) {
    console.error("Error creating data:", error);
    return NextResponse.json(
      { message: "Failed to create data" },
      { status: 500 },
    );
  }
}
