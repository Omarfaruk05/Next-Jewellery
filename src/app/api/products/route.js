import connectMongoDB from "@/lib/dbConnect";
import Product from "../../../models/Product";
import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json();

  await connectMongoDB();
  const product = await Product.create(data);
  return NextResponse.json({
    success: true,
    message: "Product successfully created.",
    data: product,
  });
}

export async function GET() {
  await connectMongoDB();
  const products = await Product.find();
  return NextResponse.json({
    success: true,
    message: "Products successfully fatched.",
    data: products,
  });
}
