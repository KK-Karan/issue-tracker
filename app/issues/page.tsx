import React from "react";
import { Button, Table, Link as RadixLink } from "@radix-ui/themes";
import Link from "next/link";
import { prisma } from "@/prisma/prisma";
import IssuesStatusBadge from "../components/IssuesStatusBadge";
import IssueButton from "./IssueButton";
export default async function Issues() {
  const issues = await prisma.issue.findMany();
  return (
    <div className="text-black">
      <IssueButton />
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
                <Link href={`/issues/${issue.id}`} passHref legacyBehavior>
                  <RadixLink>{issue.title}</RadixLink>
                </Link>
                <div className="md:hidden">{issue.status}</div>
              </Table.RowHeaderCell>
              <Table.Cell className="hidden md:table-cell">
                <IssuesStatusBadge status={issue.status} />
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
