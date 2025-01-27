import { TrashIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

export default function DeleteIssueButton({ resultId }: { resultId: number }) {
  return (
    <Button className="hover:cursor-pointer flex items-center gap-2" color="red">
      <Link href={`/issues/`} className="flex items-center gap-2">
        <TrashIcon />
        <span>Delete Issue</span>
      </Link>
    </Button>
  );
}

