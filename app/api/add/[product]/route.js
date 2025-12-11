import { db_uri } from "@/app/lib/db";
import { call } from "@/app/lib/model/callction";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request, content) {
    const params = await content.params; 
    const productId = params.product;
    const filter = {_id:productId}
    await mongoose.connect(db_uri)
    const result = await call.findById(filter)
    return NextResponse.json({result, success:true})
}