import IssuesStatusBadge from "@/app/components/IssuesStatusBadge";
import { prisma } from "@/prisma/prisma";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import Markdown from 'react-markdown'
export default async function IssueDetails({
  params,
}: {
  params: { id: string };
}) {
  // the params object is automatically passed by next.js for dynamic routing
  const result = await prisma.issue.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!result) {
    notFound();
  }
  return (
    <div className="flex gap-3 flex-col">
      <Heading>{result?.title}</Heading>
      <Flex gap="2">
        <IssuesStatusBadge status={result?.status} />
        <Text>{result?.createdAt.toDateString()}</Text>
      </Flex>
      <Card className="prose">
        <Markdown>{result?.description}</Markdown>
      </Card>
    </div>
  );
}
