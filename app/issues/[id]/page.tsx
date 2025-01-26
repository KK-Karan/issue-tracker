import { prisma } from "@/prisma/prisma";
import { Box, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";
export default async function IssueDetailsPage({
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
    <Grid columns={{ initial: "1", md: "2" }} gap="3">
      <IssueDetails result={result} />
      <Box>
        <EditIssueButton resultId={result.id} />
      </Box>
    </Grid>
  );
}
