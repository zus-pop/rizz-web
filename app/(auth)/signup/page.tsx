'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from 'next/link';

export default function SignupPage() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const router = useRouter();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic gửi OTP ở đây
    console.log('Sending OTP to:', phoneNumber);
    // Chuyển hướng đến trang OTP với số điện thoại trong query params
    router.push(`/otp-verify?phone=${phoneNumber}`);
  };

  return (
    <div className="min-h-screen bg-card dark:bg-card text-foreground flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="bg-card text-card-foreground p-8 rounded-lg shadow-xl text-center border border-border">
          <h1 className="text-2xl font-bold mb-2">Sign Up</h1>
          <p className="text-muted-foreground text-sm mb-6">Enter your phone number to create an account.</p>
          <form onSubmit={handleSignup} className="flex flex-col gap-4">
            <div className="grid gap-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="0123456789"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                className="bg-input border-border"
              />
            </div>
            <Button type="submit" className="w-full">Sign Up</Button>
          </form>
          <p className="mt-4 text-center text-sm text-foreground">
            Already have an account?{' '}
            <Link href="/login" className="text-primary hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}