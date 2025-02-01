import { prisma } from "@/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {  
        const data = await prisma.user.findMany()
        return NextResponse.json(data)
    } catch (error) {
        console.log(error)
    }

}