import GlassSurface from "@/components/GlassSurface";
import MonitorMockup from "@/components/MonitorMockup";
import PhoneMockup from "@/components/PhoneMockup";
import Image from "next/image";
import burberryLogo from "@/public/images/logo1.png";
import myAppLogo from "@/public/images/logo.png";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <header className="w-full relative">
        <GlassSurface
          className="w-full h-[80px] flex items-center justify-between px-20"
          displace={15}
          width="100%"
          distortionScale={-150}
          redOffset={5}
          greenOffset={15}
          blueOffset={25}
          brightness={60}
          opacity={0.8}
          mixBlendMode="screen"
        >
          <h1 className="text-2xl font-bold tracking-wider ml-4">RIZZ WEB</h1>

          <nav className="ml-auto">
            <ul className="flex gap-12 text-lg">
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </GlassSurface>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center text-center px-4 w-full">
        {/* Tiêu đề chính */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Khám Phá <span className="text-pink-500">Người Ấy</span> Của Bạn Ngay
          Hôm Nay.
        </h2>

        {/* Mô tả ngắn */}
        <p className="max-w-2xl text-lg sm:text-xl text-gray-300">
          Tham gia cộng đồng RIZZ WEB để kết nối với những người chân thành, bắt
          đầu những buổi hẹn hò tuyệt vời và xây dựng các mối quan hệ ý nghĩa.
          Câu chuyện tình yêu của bạn bắt đầu từ đây.
        </p>

        {/* Các nút tải ứng dụng */}
        <div className="flex gap-4 items-center flex-col sm:flex-row mt-4">
          <a
            href="#" // Thay bằng link App Store của bạn
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-3 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-base h-12 px-6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/apple-logo.svg" // Bạn cần thêm icon này vào thư mục /public
              alt="Apple logo"
              width={20}
              height={20}
            />
            Tải trên App Store
          </a>
          <a
            href="#" // Thay bằng link Google Play của bạn
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-base h-12 px-6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/google-play-logo.svg" // Bạn cần thêm icon này vào thư mục /public
              alt="Google Play logo"
              width={20}
              height={20}
            />
            Tải trên Google Play
          </a>
        </div>

        {/* Container cho Mockups */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-12 mt-16 w-full">
          {/* Monitor Mockup */}
          <div className="relative transform -rotate-3">
            <MonitorMockup
              webScreenshotSrc={burberryLogo}
              webScreenshotAlt="Website Interface"
            />
          </div>

          {/* Phone Mockup */}
          <div className="relative transform rotate-6">
            <PhoneMockup appLogoSrc={myAppLogo} appLogoAlt="Mobile App Logo" />
          </div>
        </div>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
