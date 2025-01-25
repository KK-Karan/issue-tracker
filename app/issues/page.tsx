import React from "react";
import { Button, Table } from "@radix-ui/themes";
import Link from "next/link";
import { prisma } from "@/prisma/prisma";
export default async function Issues() {
  const issues = await prisma.issue.findMany();
  return (
    <div className="text-black">
      <div className="mb-5">
        <Button>
          <Link href="/issues/new">New Issue</Link>
        </Button>
      </div>

      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Description
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Created
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        {issues.map((issue) => (
          <Table.Body key={issue.id}>
            <Table.Row>
              <Table.RowHeaderCell>
                {issue.title}
                <div className="md:hidden">{issue.status}</div>
              </Table.RowHeaderCell>
              <Table.Cell className="hidden md:table-cell">
                {issue.status}
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {issue.createdAt.toDateString()}
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}
      </Table.Root>
    </div>
  );
}
