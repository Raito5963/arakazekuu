// app/layout.tsx
"use client";
import { metadata } from './metadata';  // サーバーサイドのmetadataをインポート
import type { Metadata } from "next"; // サーバーサイド用の型
import { hina } from "./../utils/font";
import './style/globals.css';
import Header from "./_components/header";
import Footer from "./_components/footer";
import Splash from "./splash/page";  // スプラッシュページのインポート
import { useEffect, useState } from "react";  // クライアントサイドフック
import { useRouter } from "next/navigation";

// クライアントサイド処理を管理する
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSplashCompleted, setSplashCompleted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isSplashCompleted) {
      router.push('/');
    }
  }, [isSplashCompleted, router]);

  return (
    <html lang="en">
      <body className={hina.className}>
        {!isSplashCompleted ? (
          <Splash onComplete={() => setSplashCompleted(true)} />  // スプラッシュ画面
        ) : (
          <>
            <Header />
            {children}
            <Footer />
          </>
        )}

      </body>
    </html>
  );
}
