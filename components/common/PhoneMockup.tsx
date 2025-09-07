// src/components/common/PhoneMockup.tsx
import Image, { StaticImageData } from 'next/image';

interface PhoneMockupProps {
  appLogoSrc: StaticImageData;
  appLogoAlt: string;
}

export default function PhoneMockup({ appLogoSrc, appLogoAlt }: PhoneMockupProps) {
  return (
    // Màu nền tối mặc định, với màu sáng khi có class "dark"
    <div className="relative w-72 h-[480px] bg-white dark:bg-black rounded-3xl shadow-xl border-4 border-gray-200 dark:border-gray-700 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 m-1.5 bg-gray-100 dark:bg-gray-900 rounded-2xl flex flex-col items-center justify-center p-4">
        {/* Thanh trạng thái */}
        <div className="absolute top-2 w-full flex justify-between px-3 text-gray-400 dark:text-gray-600 text-xs">
          <span>9:41</span>
          <div className="flex space-x-1">
            <span>📡</span>
            <span>📶</span>
            <span>🔋</span>
          </div>
        </div>

        <Image
          src={appLogoSrc}
          alt={appLogoAlt}
          className="w-30 h-auto object-contain mb-4"
        />
        {/* Chữ sẽ đổi màu */}
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">Connecting people.</p>

        {/* Home indicator */}
        <div className="absolute bottom-2 w-24 h-1 bg-gray-600 dark:bg-gray-400 rounded-full"></div>
      </div>
    </div>
  );
}