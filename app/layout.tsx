import type { Metadata } from "next";
import { hina } from "./../utils/font";
import './style/globals.css';
import Header from "./_components/header";
import Footer
 from "./_components/footer";
export const metadata: Metadata = {
  title: "嵐風くう 公式HP",
  description: "今一番勢いのある新人歌い手の嵐風くうの公式HPです。",
  keywords: ["嵐風くう", "歌い手", "歌ってみた", "YouTuber"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={hina.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
