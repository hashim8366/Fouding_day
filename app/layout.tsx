import type { Metadata } from "next";
import "./globals.css";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "يوم التأسيس السعودي - 1139هـ",
  description: "رحلة تفاعلية عبر تاريخ الدولة السعودية الأولى",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased min-h-screen flex flex-col font-sakkal">
        <Navigation />
        <div className="flex-grow">
            {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
