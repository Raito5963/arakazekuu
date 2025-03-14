// pages/splash.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';

const Splash: NextPage = () => {
    const router = useRouter();

    // 動画終了時に実行する関数
    const handleVideoEnd = (): void => {
        router.push('/home'); // メインページへ遷移（例：/home）
    };

    // 動画終了イベントを使う場合と、setTimeoutでの遷移の両方を実装
    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/home');
        }, 5000); // 5000ms = 5秒

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
            <video
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                src="/path/to/your/video.mp4"  // /publicディレクトリ内の動画ファイルのパスに変更してください
                autoPlay
                muted
                playsInline
                onEnded={handleVideoEnd} // 動画の再生が終了したときに呼び出し
            />
        </div>
    );
};

export default Splash;
