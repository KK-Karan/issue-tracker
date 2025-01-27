
"use client"

import { Button } from "@radix-ui/themes"
import { signIn } from "next-auth/react"
 
export default function SignIn() {
  return <Button onClick={() => signIn("google")}>Sign In</Button>
}
