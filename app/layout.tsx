"use client";
import { hina } from "./../utils/font";
import "./style/globals.css";
import Header from "./_components/header";
import Splash from "./_components/splash";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showSplash, setShowSplash] = useState(false); // 初期はスプラッシュ非表示
  const [fadeSplash, setFadeSplash] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // ページ遷移時のスプラッシュ表示＆遷移処理
  const handlePageChange = (url: string) => {
    setShowSplash(true); // スプラッシュを表示

    setTimeout(() => {
      // ページ遷移開始（スプラッシュ表示後すぐ）
      router.push(url); // ページ遷移

      // ページ遷移後にスプラッシュをフェードアウトさせる
      setTimeout(() => {
        setFadeSplash(true); // フェードアウト開始
        setTimeout(() => {
          setShowSplash(false); // スプラッシュ非表示
        }, 1000); // フェードアウト時間（1秒後にスプラッシュ非表示）
      }, 1000); // ページ遷移後すぐにフェードアウト開始
    }, 1200); // スプラッシュ表示後1秒経過後にページ遷移開始
  };

  return (
    <html lang="en">
      <body className={hina.className}>
        <div className="app-container">
          <Header onNavigate={handlePageChange} />
          <main className="content">
            <div className="background">
              <video autoPlay loop muted className="background-video">
                <source src="/background.mp4" type="video/mp4" />
              </video>
            </div>

            {/* ページ遷移のアニメーションは削除 */}
            <div className="page-transition">
              {children}
            </div>
          </main>
          <footer className="footer">
            <p>©ärakaze kuü All Right Reserved.</p>
          </footer>
        </div>

        {/* スプラッシュ画面 */}
        {showSplash && (
          <div className={`splash-container ${fadeSplash ? "fade-out" : ""}`}>
            <Splash onComplete={() => {}} />
          </div>
        )}
      </body>
    </html>
  );
}
