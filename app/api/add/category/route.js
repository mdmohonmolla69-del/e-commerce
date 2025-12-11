import { db_uri } from "@/app/lib/db";
import { categoryis } from "@/app/lib/model/categori";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await mongoose.connect(db_uri)
        const categories = await categoryis.find({})
        return NextResponse.json({categories}, {status: 200})
    } catch (error) {
        return NextResponse.json({message: "Error", error: error.message}, {status: 500})
    }
    
}