"use client";
import React from "react";
import { FaBug } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import SignIn from "./components/SignInButton";
import { SignOut } from "./components/SignOutButton";
import { useSession } from "next-auth/react";
import { DropdownMenu, Button, Flex, Avatar, Text } from "@radix-ui/themes";
export default function NavBar() {
  const currentPath = usePathname();
  const { data: session } = useSession();

  return (
    <nav className="border border-gray-300 w-full h-[60px] flex gap-6 justify-between items-center p-5">
      <div className="flex flex-row gap-6 justify-center items-center">
        <Link href="/">
          <FaBug className="text-black" />
        </Link>
        <h1>
          <Link
            href="/"
            className={classNames({
              "text-zinc-900": currentPath === "/",
              "text-zinc-500": currentPath !== "/",
            })}
          >
            Dashboard
          </Link>
        </h1>
        <h1>
          <Link
            href="/issues"
            className={classNames({
              "text-zinc-900": currentPath === "/issues",
              "text-zinc-500": currentPath !== "/issues",
            })}
          >
            Issues
          </Link>
        </h1>
      </div>

      <Flex gap="2" justify={"center"} align={"center"}>
        {!session?.user && <SignIn />}
        {session?.user && (
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Avatar
                src={session?.user?.image || undefined}
                fallback="U"
                radius="full"
                size="3"
                referrerPolicy="no-referrer"
              />
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <Text>{session?.user?.email}</Text>
              <DropdownMenu.Separator />
              {session?.user && <SignOut />}
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        )}
      </Flex>
    </nav>
  );
}
