import { Pencil1Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

export default function EditIssueButton({resultId} : { resultId: number}) {
  return (
    <Button className="hover:cursor-pointer">
      <Pencil1Icon />
      <Link href={`/issues/${resultId}/edit`}></Link>
      Edit
    </Button>
  );
}
