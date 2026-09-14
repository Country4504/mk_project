import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: '深圳市辉锐信息科技有限公司',
    template: '%s | 深圳市辉锐信息科技有限公司',
  },
  description:
    '深圳市辉锐信息科技有限公司专注于企业信息安全管理体系与技术架构建设，提供信息安全咨询、安全解决方案、安全运营、安全人才培养一站式服务。',
  keywords: [
    '辉锐信息', '信息安全', '网络安全', '边界卫士', '终端防泄密',
    '文档加密', '准入网关', '云安全', '数据安全', '安全咨询',
    '深圳辉锐科技', 'Phaeray',
  ],
  icons: {
    icon: '/favicon128x128.ico',
  },
  openGraph: {
    title: '深圳市辉锐信息科技有限公司',
    description: '专注企业信息安全管理体系与技术架构建设，提供咨询、方案、运营、培训一站式服务。',
    url: 'https://www.phaeray.com',
    siteName: '深圳市辉锐信息科技有限公司',
    locale: 'zh_CN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="dark">
      <body className="antialiased bg-[#F7F9FB] text-[#17324A]">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
