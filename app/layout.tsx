"use client";
import { hina } from "./../utils/font";
import "./style/globals.css";
import Header from "./_components/header";
import Footer from "./_components/footer";
import Splash from "./splash/page"; // スプラッシュ画面のインポート
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // スプラッシュ画面を表示するかどうか
  const [showSplash, setShowSplash] = useState(true);
  // フェードアウト用のクラス付与状態
  const [fadeSplash, setFadeSplash] = useState(false);

  // Splash の終了通知時に呼ばれるハンドラー
  const handleSplashComplete = () => {
    // まずフェードアウトさせる
    setFadeSplash(true);
    // CSS のトランジション（1秒）後にスプラッシュ画面を DOM から除去
    setTimeout(() => {
      setShowSplash(false);
    }, 1000);
  };

  return (
    <html lang="en">
      <body className={hina.className}>
        {/* メインコンテンツは下に常に配置 */}
        <Header />
        {children}
        <Footer />

        {/* スプラッシュ画面を上に重ねる */}
        {showSplash && (
          <div className={`splash-container ${fadeSplash ? "fade-out" : ""}`}>
            <Splash onComplete={handleSplashComplete} />
          </div>
        )}
      </body>
    </html>
  );
}
