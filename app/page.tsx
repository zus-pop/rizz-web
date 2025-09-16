import GlassSurface from "@/components/GlassSurface";
import MonitorMockup from "@/components/MonitorMockup";
import PhoneMockup from "@/components/PhoneMockup";
import Image from "next/image";
import burberryLogo from '@/public/images/logo1.png';
import myAppLogo from '@/public/images/logo.png';

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
  <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 items-center mt-4">
    <a href="#" className="cursor-pointer">
      <div className="flex max-w-48 h-12 px-3 gap-2 rounded-xl items-center justify-center bg-black text-white dark:text-black dark:bg-white sm:h-14">
        <svg viewBox="30 336.7 120.9 129.2" className="w-5 sm:w-7">
          <path
            d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
            fill="#FFD400"
          ></path>
          <path
            d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
            fill="#FF3333"
          ></path>
          <path
            d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
            fill="#48FF48"
          ></path>
          <path
            d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
            fill="#3BCCFF"
          ></path>
        </svg>
        <div>
          <div className="text-[.5rem] sm:text-xs text-left">GET IT ON</div>
          <div className="text-sm font-semibold font-sans -mt-1 sm:text-xl">
            Google Play
          </div>
        </div>
      </div>
    </a>

    <a href="#" className="cursor-pointer">
      <div className="flex max-w-48 h-12 px-3 gap-2 rounded-xl items-center justify-center bg-black text-white dark:text-black dark:bg-white sm:gap-3 sm:h-14">
        <svg viewBox="0 0 384 512" className="w-5 sm:w-7">
          <path
            d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
            fill="currentColor"
          ></path>
        </svg>
        <div>
          <div className="text-[.5rem] sm:text-xs text-left">
            Download on the
          </div>
          <div className="text-lg font-semibold font-sans -mt-1 sm:text-2xl">
            App Store
          </div>
        </div>
      </div>
    </a>

  </div>
    <a
      href="#"
      className="group hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-94 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden before:absolute before:w-12 before:h-12 before:content-[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content-[''] after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg"
    >
      Tiếp tục với bản web
    </a>

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
      <PhoneMockup
        appLogoSrc={myAppLogo}
        appLogoAlt="Mobile App Logo"
      />
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
