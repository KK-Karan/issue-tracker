import { Pencil1Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

export default function EditIssueButton({resultId} : { resultId: number}) {
  return (
    <Button className="hover:cursor-pointer flex items-center gap-2">
      <Link href={`/issues/${resultId}/edit`} className="flex items-center gap-2">
        <Pencil1Icon />
        <span>Edit</span>
      </Link>
    </Button>
  );  
}
