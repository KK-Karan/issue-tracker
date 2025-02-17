import { issueSchema, patchIssueSchema } from "@/app/validationSchema";
import { prisma } from "@/prisma/prisma";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const { params } = context;
  const data = await request.json(); // get the request body and the request incoming here is the one sent by the frontend
  const validation = patchIssueSchema.safeParse(data); // first we validate the request
  const { title, description, assignedToUserId } = data;

  if (!validation.success) {
    // if not valid then return the error, this object we get when the request is invalid { success: false, error: <error details> }
    return NextResponse.json(validation.error.format(), { status: 400 });
  }

  if (assignedToUserId) {
    const user = await prisma.user.findUnique({
      where: {
        id: assignedToUserId,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "Invalid User" }, { status: 400 });
    }
  }

  const issue = await prisma.issue.findUnique({
    // we are checking now if the issue exists in our db
    where: {
      id: parseInt(params.id),
    },
  });

  if (!issue) {
    // if issue doesn't exists then throw error
    return NextResponse.json(
      {
        error: "Issue not found",
      },
      { status: 404 }
    );
  }

  const updatedIssue = await prisma.issue.update({
    // update the issue
    where: {
      id: issue.id,
    },
    data: {
      // here data object contains the new values coz the data object is the request we got from the frontend
      title,
      description,
      assignedToUserId,
    },
  });

  return NextResponse.json(updatedIssue);
}

export async function DELETE(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const issue = await prisma.issue.findUnique({
    // Prisma automatically generates a lowercased version of the model name (issue) to use in your application code.
    where: {
      id: parseInt(context.params.id),
    },
  });

  if (!issue) {
    return NextResponse.json(
      {
        error: "Issue not found",
      },
      {
        status: 404,
      }
    );
  }

  await prisma.issue.delete({
    where: {
      id: parseInt(context.params.id),
    },
  });

  return NextResponse.json({});
}
