import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Phạm Quang Vinh | Data Processing & Automation",
    template: "%s | Phạm Quang Vinh",
  },
  description:
    "Hồ sơ năng lực của Phạm Quang Vinh - Warehouse Controller chuyên xử lý dữ liệu quy mô lớn, tự động hóa kho vận, AI Vision và trực quan hóa dữ liệu.",
  keywords: [
    "Phạm Quang Vinh",
    "xử lý dữ liệu",
    "tự động hóa",
    "SAP Scripting",
    "VBA Excel",
    "warehouse controller",
    "AI Agent",
    "AI Vision",
    "Bin Location",
    "Warehouse Automation",
  ],
  authors: [{ name: "Phạm Quang Vinh" }],
  creator: "Phạm Quang Vinh",
  openGraph: {
    title: "Phạm Quang Vinh | Data Processing & Automation",
    description:
      "Biến quy trình kho vận phức tạp thành hệ thống dữ liệu rõ ràng, nhanh và chính xác.",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Phạm Quang Vinh - Data Processing & Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Phạm Quang Vinh | Data Processing & Automation",
    description:
      "Chuyên viên xử lý dữ liệu, tự động hóa và trực quan hóa dữ liệu.",
    images: ["/og-cover.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
