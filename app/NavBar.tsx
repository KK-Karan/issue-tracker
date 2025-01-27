"use client";
import React from "react";
import { FaBug } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import SignIn from "./components/SignInButton";
import { SignOut } from "./components/SignOutButton";
import { useSession } from "next-auth/react";
export default function NavBar() {
  const currentPath = usePathname();
  const {data : session} = useSession()

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


      <div className="flex flex-row gap-2">
               {session?.user && <SignOut />}
    {!session?.user && <SignIn />} 
      </div>
    </nav>
  );
}
