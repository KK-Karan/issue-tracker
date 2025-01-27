"use client"
import { Button } from "@radix-ui/themes"
import { signOut } from "next-auth/react"
 
export function SignOut() {
  return <Button onClick={() => signOut()}>Sign Out</Button>
}