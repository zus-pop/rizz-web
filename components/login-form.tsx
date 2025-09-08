'use client'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from 'next/link'
import { GoogleLoginButton } from "./common/GoogleLoginButton"

export function RizzLoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold text-card-foreground">
          Login to your account
        </h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your phone number to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="phone-number" className="text-foreground">Phone number</Label>
          <Input
            id="phone-number"
            type="tel"
            placeholder="Enter phone number"
            required
            className="bg-input text-text-color border-border placeholder:text-muted-foreground"
          />
        </div>
        <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
          Continue
        </Button>
        <div className="relative text-center text-sm">
          <span className="text-muted-foreground relative z-10 px-2">
            Or continue with
          </span>
        </div>
        <GoogleLoginButton />
      </div>
      <div className="text-center text-sm text-primary">
        Don&apos;t have an account?{" "}
        <Link href="#" className="underline underline-offset-4 text-primary">
          Sign up
        </Link>
      </div>
    </form>
  )
}