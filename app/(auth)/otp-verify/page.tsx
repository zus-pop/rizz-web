'use client'

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function OtpVerifyPage() {
  const [otp, setOtp] = useState<string[]>(['', '', '', '']);
  const [phoneNumber, setPhoneNumber] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const phone = searchParams.get('phone');
    if (phone) {
      setPhoneNumber(phone);
    }
  }, [searchParams]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (/[0-9]/.test(value) || value === '') {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value !== '' && index < 3) {
        (e.target.nextElementSibling as HTMLInputElement)?.focus();
      }
    }
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const fullOtp = otp.join('');
    // Logic xác thực OTP
    console.log(`Verifying OTP ${fullOtp} for phone ${phoneNumber}`);
    // Nếu xác thực thành công, chuyển hướng người dùng
    // router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4 relative">
      {/* Background SVG với hiệu ứng blur và animation */}
      <svg className="absolute inset-0 z-0 opacity-50 blur-[20px] animate-[anim_3s_infinite] w-[200px] h-[200px] m-auto" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="var(--primary)" d="M56.8,-23.9C61.7,-3.2,45.7,18.8,26.5,31.7C7.2,44.6,-15.2,48.2,-35.5,36.5C-55.8,24.7,-73.9,-2.6,-67.6,-25.2C-61.3,-47.7,-30.6,-65.6,-2.4,-64.8C25.9,-64.1,51.8,-44.7,56.8,-23.9Z" transform="translate(100 100)" />
      </svg>
      <form onSubmit={handleVerify} className="relative z-10 flex flex-col gap-4 bg-transparent border border-primary/40 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm p-8 w-56 h-56">
        <div className="flex flex-col gap-4 my-auto">
          <p className="text-center text-foreground font-bold">OTP Verification</p>
          <div className="flex justify-center gap-2">
            {otp.map((value, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={value}
                onChange={(e) => handleInputChange(e, index)}
                className="w-10 h-10 text-center bg-transparent outline-none border border-primary rounded-xl transition-all duration-600 ease-in text-foreground focus:border-white focus:outline-none"
              />
            ))}
          </div>
          <Button type="submit" className="w-full bg-transparent text-foreground border-2 border-primary rounded-xl transition-all duration-500 ease-in hover:bg-primary hover:text-white">
            Verify
          </Button>
        </div>
      </form>
      <style jsx global>{`
        @keyframes anim {
          0% { transform: translateY(-70px); }
          50% { transform: translateY(-19px); }
          100% { transform: translateY(-70px); }
        }
      `}</style>
    </div>
  );
}