import IssuesStatusBadge from "@/app/components/IssuesStatusBadge";
import { Heading, Flex, Card, Skeleton, Text } from "@radix-ui/themes";
import React from "react";
import Markdown from "react-markdown";

export default function loading() {
  return (
    <div className="flex flex-col gap-4 max-w-xl">
      <Heading>
        <Skeleton className="h-6 w-3/4" />
      </Heading>

      <Flex gap="2">
        <Skeleton className="h-5 w-1/4" />
        <Skeleton className="h-5 w-1/4" />
      </Flex>

      <Card className="prose p-4">
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-5/6 mb-2" />
        <Skeleton className="h-4 w-3/4" />
      </Card>
    </div>
  );
}
