import { prisma } from "@/prisma/prisma";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";
import DeleteIssueButton from "./DeleteIssueButton";
import AssignSelect from "./AssignSelect";
export default async function IssueDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  // the params object is automatically passed by next.js for dynamic routing
  const { id } = await params;
  const result = await prisma.issue.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!result) {
    notFound(); // defined in next.js to show 404 page
  }
  return (
    <Grid columns={{ initial: "1", md: "5" }} gap="3">
      <Box className="lg:col-span-4">
        <IssueDetails result={result} />
      </Box>
      <Flex direction="column" gap="4">
        <AssignSelect result = {result} />
        <EditIssueButton resultId={result.id} />
        <DeleteIssueButton resultId={result.id} />
      </Flex>
    </Grid>
  );
}
