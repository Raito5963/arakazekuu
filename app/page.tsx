// pages/index.tsx
"use client"; // クライアントコンポーネントとして指定

import { useRouter } from 'next/navigation';
import { useRef } from 'react';

const HomePage = () => {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnd = () => {
    router.push('/home');
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const { currentTime, duration } = videoRef.current;
      // 動画の残りが0.5秒以内なら遷移（Safari対策のfallback）
      if (duration - currentTime < 0.5) {
        handleVideoEnd();
      }
    }
  };

  return (
    <div style={{ backgroundColor: 'transparent' }}>
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        // 古いSafari向け
        webkit-playsinline="true"
        onEnded={handleVideoEnd}
        onTimeUpdate={handleTimeUpdate}
        style={{
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 9999, // 他のコンテンツより前面に表示
          backgroundColor: 'transparent',
        }}
      >
        <source src="/Loading.mp4" type="video/mp4" />
        動画がサポートされていない場合
      </video>
    </div>
  );
};

export default HomePage;
