import { NextRequest, NextResponse } from "next/server";
import { z } from "zod"
import { prisma } from "@/prisma/prisma";


const CreateIssueSchema = z.object({
    title: z.string().min(1).max(255),
    description:z.string().min(1)
})


export async function POST(request: NextRequest) {
   const data = await request.json()
   const result = CreateIssueSchema.safeParse(data)

   if(!result.success){
     return NextResponse.json(result.error.errors, {status: 400})
   }

   const newIssue = await prisma.issue.create({ // create method inserts a new record in the database.
    data: {title: data.title , description: data.description} //The method prisma.issue.create is a Prisma Client query that creates a new record in the issue table (or model) in your database. This method is part of the Prisma ORM and allows you to interact with your database using JavaScript or TypeScript.
   })

   return NextResponse.json(newIssue , {status: 201})

}