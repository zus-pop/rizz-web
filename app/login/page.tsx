// src/app/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Lobster } from 'next/font/google';

// Import các component mockup và theme toggle
import PhoneMockup from '@/components/common/PhoneMockup';
import MonitorMockup from '@/components/common/MonitorMockup';
import { ModeToggle } from '@/components/theme/theme-toggle';

// Import hình ảnh
import burberryLogo from '@/public/images/logo.jpg';
import myAppLogo from '@/public/images/logo.jpg';

// Khởi tạo font Lobster
const lobster = Lobster({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-lobster',
});

export default function LoginPage() {
  return (
    // Thêm class dark: vào các thành phần gốc
    <div className={`min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col items-center justify-center p-4 font-sans antialiased ${lobster.variable}`}>
      <div className="absolute top-4 right-4 z-50">
        <ModeToggle />
      </div>

      <main className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20 w-full max-w-6xl">
        {/* Left Side: Mockups Stack */}
        <div className="hidden md:flex flex-shrink-0 relative">
          <div className="relative z-10">
            <MonitorMockup
              webScreenshotSrc={burberryLogo}
              webScreenshotAlt="Website Interface"
            />
          </div>
          <div className="absolute z-20 bottom-[-20px] left-1/2 transform -translate-x-1/2 md:bottom-[-20px] md:left-[80%] md:transform-none lg:left-[70%]">
            <PhoneMockup
              appLogoSrc={myAppLogo}
              appLogoAlt="Mobile App Logo"
            />
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="w-full max-w-sm flex-shrink-0 mt-20 md:mt-0">
          {/* Cập nhật các class màu cho form */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl text-center border border-gray-200 dark:border-gray-700">
            <h1 className="text-6xl font-lobster text-gray-800 dark:text-gray-400 tracking-wider mb-8">
              Rizz
            </h1>
            <button
              type="button"
              className="w-full p-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md flex items-center justify-center space-x-2 transition-colors mb-4"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.24 10.23c-.235 0-.46.015-.68.04-2.822.42-5.022 2.87-5.022 5.867S8.74 21.056 12.24 21.056c2.81 0 5.12-1.467 6.33-3.847l-1.63-1.04c-.7.98-1.74 1.76-2.95 1.76-1.92 0-3.48-1.56-3.48-3.48s1.56-3.48 3.48-3.48c1.07 0 1.98.5 2.58 1.35l1.86-1.12C16.8 9.57 14.62 8.7 12.24 8.7z"/>
                <path d="M21.72 12.22c0 .32.02.63.02.94 0 7.82-5.26 13.91-13.98 13.91C4.78 27.07 0 21.84 0 15.3c0-6.54 4.78-11.78 12.01-11.78 3.19 0 5.92 1.25 8.1 3.4L18.15 7.1c-1.3-1.2-2.94-1.93-4.9-1.93-3.5 0-6.32 2.82-6.32 6.32s2.82 6.32 6.32 6.32c3.5 0 5.76-2.3 6.04-5.5.07-.6.09-1.2.09-1.8zm-9.48-1.35c-1.92 0-3.48 1.56-3.48 3.48s1.56 3.48 3.48 3.48 3.48-1.56 3.48-3.48-1.56-3.48-3.48-3.48z"/>
              </svg>
              <span>Đăng nhập bằng Google</span>
            </button>
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-white dark:bg-gray-800 px-3 text-gray-500 dark:text-gray-400">HOẶC</span>
              </div>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Số điện thoại"
                className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
              />
              <button
                type="submit"
                className="w-full p-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md transition-colors"
              >
                Tiếp tục
              </button>
            </form>
            <div className="mt-4 text-xs text-gray-400 dark:text-gray-500">
              <p>
                Bằng cách đăng nhập, bạn đồng ý với Điều khoản và chính sách của chúng tôi.
              </p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl text-center mt-4 border border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400">
              Bạn chưa có tài khoản?{' '}
              <Link href="#" className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 font-semibold">
                Đăng ký
              </Link>
            </p>
          </div>
        </div>
      </main>
      <footer className="mt-8 text-xs text-gray-500 dark:text-gray-400 text-center">
        {/* Footer */}
      </footer>
    </div>
  );
}