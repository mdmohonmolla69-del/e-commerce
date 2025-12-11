import mongoose from "mongoose" 
import { NextResponse } from "next/server"

import { db_uri } from "@/app/lib/db"
import { navbart } from "@/app/lib/model/nav_text"


export async function GET() {

    let data = []
    try {
        await mongoose.connect(db_uri)
        data = await navbart.find()
    } catch (error) {
        data = {success: false}
    }
    // console.log(data)

    return NextResponse.json({result:data, success: true })
}
