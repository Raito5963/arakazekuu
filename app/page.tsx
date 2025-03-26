// pages/index.tsx
"use client"; // これを追加

import { useRouter } from 'next/navigation';

const HomePage = () => {
  const router = useRouter();

  const handleVideoEnd = () => {
    // 動画が終わったら次のページに遷移
    router.push('/home'); // 次のページのURLに変更
  };

  return (
    <div>
      <video
        autoPlay
        muted
        onEnded={handleVideoEnd} // 動画終了時に遷移処理
        style={{
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 9999, // ヘッダーやフッターより上に表示するため、z-indexを調整
        }}
      >
        <source src="/Loading.mp4" type="video/mp4" />
        動画がサポートされていない場合
      </video>
    </div>
  );
};

export default HomePage;
