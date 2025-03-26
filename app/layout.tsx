"use client";
import { hina } from "./../utils/font";
import "./style/globals.css";
import Header from "./_components/header";
import Splash from "./_components/splash"; // 新しいパスに変更
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
    }, 2000);
  };

  return (
    <html lang="en">
      <body className={hina.className}>
                {/* スプラッシュ画面を上に重ねる */}
                {showSplash && (
          <div className={`splash-container ${fadeSplash ? "fade-out" : ""}`}>
            <Splash onComplete={handleSplashComplete} />
          </div>
        )}
        {/* メインコンテンツは下に常に配置 */}
        <div className="app-container">
          <Header />
          <main className="content">
            <div className='background'>
              <video autoPlay loop muted className='background-video'>
                <source src='/background.mp4' type='video/mp4' />
              </video>
            </div>
            {children}
          </main>
          <footer className="footer">
            <p>©ärakaze kuü All Right Reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
