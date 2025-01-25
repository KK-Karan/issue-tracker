import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";
import React from "react";

interface Props {
  status: Status;
}

interface StatusInfo {
  name: string;
  color: "red" | "violet" | "green";
}
// keys from status and values of type statusinfo are getting accepted in the record type of typescript for mapping them
const IssueStatus: Record<Status, StatusInfo> = {
  OPEN: { name: "Open", color: "red" },
  IN_PROGRESS: { name: "In Progress", color: "violet" },
  CLOSED: { name: "Closed", color: "green" },
};

export default function IssuesStatusBadge({ status }: Props) {
  return (
    <Badge color={IssueStatus[status].color}>{IssueStatus[status].name}</Badge>
  );
}

//  The status variable is a key of type Status. It can have one of the following values:
// "OPEN"
// "IN_PROGRESS"
// "CLOSED"
// This value is passed as a prop to the IssuesStatusBadge component.
