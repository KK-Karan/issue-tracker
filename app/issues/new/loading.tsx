import { Box, Skeleton } from "@radix-ui/themes";
import React from "react";

export default function LoadingForm() {
  return (
    <Box className="max-w-xl flex gap-4">
      <Skeleton className="mb-2" height='2rem'></Skeleton>
      <Skeleton height="23rem"></Skeleton>
    </Box>
  );
}
