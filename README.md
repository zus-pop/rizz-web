This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


├── .next/                    # Thư mục được tạo tự động bởi Next.js
├── node_modules/             # Các thư viện đã cài đặt
├── public/
│   ├── images/
│   ├── favicon.ico
│   └── ...
├── src/
│   ├── app/                  # Các route, pages, layouts
│   │   ├── (auth)/           # Route group cho các trang liên quan đến authentication
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   └── register/
│   │   │       └── page.tsx
│   │   ├── dashboard/        # Route group cho các trang trong dashboard
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   └── page.tsx          # Trang chủ
│   │
│   ├── components/
│   │   ├── ui/               # Các component UI cơ bản (button, input,...)
│   │   │   ├── Button.tsx
│   │   │   └── Input.tsx
│   │   ├── common/           # Các component dùng chung (header, footer,...)
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   └── dashboard/        # Các component chỉ dùng trong dashboard
│   │
│   ├── lib/
│   │   ├── services/         # Các service kết nối API
│   │   ├── utils/            # Các hàm tiện ích
│   │   └── hooks/            # Custom hooks
│   │
│   └── styles/
│       ├── globals.css
│       └── ...
├── .env.local                # Biến môi trường
├── package.json
├── package-lock.json
├── next.config.mjs
├── postcss.config.js
└── tailwind.config.ts