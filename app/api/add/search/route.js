import { call } from "../../../lib/model/callction"; ;
import { NextResponse } from "next/server";
import mongoose from "mongoose";

const cannectDB = async ()=>{
    if(mongoose.connections[0].readyState) return;
    await mongoose.connect(process.env.MONGODB_URI)
}

export async function GET(request) {
    try {
        await cannectDB()
        const { searchParams } = new URL(request.url)
        const query = searchParams.get("query")
        if(!query){ 
            return NextResponse.json([])
        }

        const products = await call.find({
            title: { $regex: query, $options: "i"}
        }).select("title img_p price _id")
        return NextResponse.json(products)
    } catch (error) {
        console.error("Database Error:", error)
        return NextResponse.json({error: "Failed to fetch"}, {status: 500})
    }
}