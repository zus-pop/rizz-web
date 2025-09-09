// src/app/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Lobster } from 'next/font/google';

// Import các component mockup và theme toggle
import PhoneMockup from '@/components/common/PhoneMockup';
import MonitorMockup from '@/components/common/MonitorMockup';
import { ModeToggle } from '@/components/theme/theme-toggle';

// Import hình ảnh
import burberryLogo from '@/public/images/logo1.png';
import myAppLogo from '@/public/images/logo.png';
import { cn } from '@/lib/utils';
import { RizzLoginForm } from '@/components/login-form';

// Khởi tạo font Lobster
const lobster = Lobster({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-lobster',
});

export default function LoginPage() {
  return (
    <div className={`min-h-screen bg-background text-gray-900 dark:text-white flex flex-col items-center justify-center p-4 font-sans antialiased ${lobster.variable}`}>
      <div className="absolute top-4 right-4 z-50">
        <ModeToggle />
      </div>

      <main className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20 w-full max-w-6xl">
        {/* Left Side: Mockups Stack */}
        <div className="hidden md:flex flex-shrink-0 flex-col md:flex-row items-center gap-10">
          <div className="relative transform -rotate-3">
            <MonitorMockup
              webScreenshotSrc={burberryLogo}
              webScreenshotAlt="Website Interface"
            />
          </div>
          <div className="relative transform rotate-6">
            <PhoneMockup
              appLogoSrc={myAppLogo}
              appLogoAlt="Mobile App Logo"
            />
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="w-full max-w-sm flex-shrink-0 mt-20 md:mt-0">
          {/* Form container sử dụng màu của card và border */}
          <div className="bg-card text-card-foreground p-8 rounded-lg shadow-xl text-center border border-border">
            <RizzLoginForm />
          </div>
        </div>
      </main>
      
      {/* Footer sử dụng màu nền và màu chữ của card */}
      <footer className="mt-8 text-xs text-muted-foreground text-center">
        {/* Footer */}
      </footer>
    </div>
  );
}