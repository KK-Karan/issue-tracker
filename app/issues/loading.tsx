import { Skeleton, Table } from "@radix-ui/themes";
import React from "react";
import IssueButton from "./IssueButton";

export default function LoadingIssuesPage() {
  return (
    <div>
      <IssueButton />
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Status{" "}
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Created{" "}
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.RowHeaderCell>
              <Skeleton></Skeleton>
            </Table.RowHeaderCell>
            <Table.Cell className="hidden md:table-cell">
              <Skeleton></Skeleton>
            </Table.Cell>
            <Table.Cell className="hidden md:table-cell">
              <Skeleton></Skeleton>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>
              <Skeleton></Skeleton>
            </Table.RowHeaderCell>
            <Table.Cell className="hidden md:table-cell">
              <Skeleton></Skeleton>
            </Table.Cell>
            <Table.Cell className="hidden md:table-cell">
              <Skeleton></Skeleton>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>
              <Skeleton></Skeleton>
            </Table.RowHeaderCell>
            <Table.Cell className="hidden md:table-cell">
              <Skeleton></Skeleton>
            </Table.Cell>
            <Table.Cell className="hidden md:table-cell">
              <Skeleton></Skeleton>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </div>
  );
}
