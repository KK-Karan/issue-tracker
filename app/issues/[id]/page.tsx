import IssuesStatusBadge from "@/app/components/IssuesStatusBadge";
import { prisma } from "@/prisma/prisma";
import { Box, Button, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import { Pencil1Icon } from "@radix-ui/react-icons";
import Markdown from "react-markdown";
import Link from "next/link";
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
    <Grid columns={{ initial: "1", md: "2" }} gap='3'>
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
      <Box>
        <Button className="hover:cursor-pointer">
          <Pencil1Icon />
          <Link href={`/issues/${result.id}/edit`}></Link>
          Edit
        </Button>
      </Box>
    </Grid>
  );
}
