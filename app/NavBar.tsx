"use client";
import React from "react";
import { FaBug } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
export default function NavBar() {
  const currentPath = usePathname();
  return (
    <nav className="border border-gray-300 w-full h-[60px] flex gap-6 justify-start items-center p-4">
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
    </nav>
  );
}
