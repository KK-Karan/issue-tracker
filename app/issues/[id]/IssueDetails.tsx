import IssuesStatusBadge from "@/app/components/IssuesStatusBadge";
import { Heading, Flex, Card, Text } from "@radix-ui/themes";
import React from "react";
import Markdown from "react-markdown";
import { Status } from "@prisma/client";

interface Props {
  result: {
    title: string;
    status: Status;
    description: string;
    createdAt: Date;
  };
}

export default function IssueDetails({ result }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <Heading>{result?.title}</Heading>
      <Flex gap="3">
        <IssuesStatusBadge status={result?.status} />
        <Text>{result?.createdAt.toDateString()}</Text>
      </Flex>
      <Card className="prose">
        <Markdown>{result?.description}</Markdown>
      </Card>
    </div>
  );
}
