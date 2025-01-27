"use client";

import { TrashIcon } from "@radix-ui/react-icons";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DeleteIssueButton({ resultId }: { resultId: number }) {
  const router = useRouter();
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button
          className="hover:cursor-pointer flex items-center gap-2"
          color="red"
        >
          <TrashIcon />
          <span>Delete Issue</span>
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content maxWidth="450px">
        <AlertDialog.Title>Confirm Delete </AlertDialog.Title>
        <AlertDialog.Description size="2">
          Are you sure you want to delete this issue? This action cannot be
          undone
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button
              variant="solid"
              color="red"
              onClick={async () => {
                await axios.delete("/api/issues/" + resultId);
                router.push("/issues");
                router.refresh()
              }}
            >
              Delete Issue
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
}
