"use client";
import { hina } from "./../utils/font";
import "./style/globals.css";
import Header from "./_components/header";
import Splash from "./_components/splash";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showSplash, setShowSplash] = useState(false); // スプラッシュ表示状態
  const [fadeSplash, setFadeSplash] = useState(false); // スプラッシュのフェードアウト状態
  const [isTransitioning, setIsTransitioning] = useState(false); // ページ遷移中かどうかを管理
  const pathname = usePathname();
  const router = useRouter();

  // ページ遷移時のスプラッシュ表示＆遷移処理
  const handlePageChange = (url: string) => {
    setIsTransitioning(true); // ページ遷移開始フラグをセット
    setShowSplash(true); // スプラッシュを表示

    setTimeout(() => {
      router.push(url); // ページ遷移

      // 遷移後のスプラッシュのフェードアウト処理
      setTimeout(() => {
        setFadeSplash(true); // フェードアウトを開始
        setTimeout(() => {
          setShowSplash(false); // スプラッシュを非表示
          setIsTransitioning(false); // ページ遷移が終了したのでフラグをリセット
        }, 1); // フェードアウト後に非表示
      }, 3000); // 遷移後に少し遅れてフェードアウトを開始
    }, 2000); // スプラッシュ表示後、1秒後に遷移
  };

  // ページ遷移中でない場合に、スプラッシュをリセットする
  useEffect(() => {
    if (!isTransitioning) {
      setShowSplash(false);
      setFadeSplash(false);
    }
  }, [isTransitioning]);

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

            {/* ページコンテンツ */}
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
            <Splash />
          </div>
        )}
      </body>
    </html>
  );
}
