import { issueSchema } from "@/app/validationSchema";
import { prisma } from "@/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";


export async function PATCH(request: NextRequest , context : {params: {id: string}}) {
    const {params} = context
    const data = await request.json() // get the request body
    const validation = issueSchema.safeParse(data) // first we validate the request

    if(!validation.success) { // if not valid then return the error
        return NextResponse.json(validation.error.format() , {status: 400})
    }

    const issue = await prisma.issue.findUnique({  // we are checking now if the issue exists in our db
        where :{
           id: parseInt(params.id)
        }
    })
    
    if(!issue) { // if issue doesn't exists then throw error
        return  NextResponse.json({
            error: "Issue not found"
        } , {status: 404})
    }


    const updatedIssue = await prisma.issue.update({ // update the issue
        where :{
            id: issue.id
        },
        data: {
           title: data.title,
           description: data.description
        }
    })

    return NextResponse.json(updatedIssue)

}