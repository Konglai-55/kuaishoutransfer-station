import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: "快手点赞-24小时快手涨粉在线自助平台-快手点赞购买平台",
    template: "%s｜星河赞平台"
  },
  description:
    "快手点赞是专业的24小时快手涨粉在线自助平台，提供快手点赞购买、涨粉服务，安全快速稳定，助力您的快手账号人气提升。",
  keywords: ["快手点赞", "快手赞", "快手点赞购买", "快手涨粉", "涨粉服务", "24小时快手涨粉", "快手点赞自助平台", "快手点赞服务"],
  authors: [{ name: "快手点赞平台" }],
  creator: "快手点赞平台",
  publisher: "快手点赞平台",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  alternates: siteUrl ? { canonical: "/" } : undefined,
  openGraph: {
    type: "website",
    locale: "zh_CN",
    siteName: "快手点赞平台",
    title: "快手点赞-24小时快手涨粉在线自助平台-快手点赞购买平台",
    description: "快手点赞、涨粉服务入口，支持移动端快速访问，点击前可查看完整目标域名。",
    url: siteUrl || undefined
  },
  twitter: {
    card: "summary",
    title: "快手点赞-24小时快手涨粉在线自助平台-快手点赞购买平台",
    description: "快手点赞、涨粉服务入口，支持移动端快速访问，点击前可查看完整目标域名。"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#fbfafc"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
