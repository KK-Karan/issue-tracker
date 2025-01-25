import { Button, Link } from "@radix-ui/themes";
import React from "react";

export default function IssueButton() {
  return (
    <div className="mb-5">
      <Button className="text-white">
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </div>
  );
}
