// app/splash/page.tsx
"use client";  // Splashコンポーネントはクライアントサイド専用

import { useEffect } from "react";

interface SplashProps {
    onComplete: () => void;  // スプラッシュが終了したときに親に通知
}

const Splash = ({ onComplete }: SplashProps) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();  // スプラッシュが終了したら通知
        }, 5000);  // 5秒後に終了

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
            <video
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                src="/Loading.mp4"  // /publicディレクトリ内の動画を参照
                autoPlay
                muted
                playsInline
                onEnded={onComplete}  // 動画終了時にも通知
            />
        </div>
    );
};

export default Splash;
