"use client";
import { useEffect } from "react";
import "./../style/globals.css";

interface SplashProps {
    onComplete: () => void; // スプラッシュ終了時の通知
}

const Splash = ({ onComplete }: SplashProps) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete(); // 8秒後に終了通知
        }, 4000);
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div style={{ width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: 'transparent'  }}>
            <video
                style={{ width: "100%", height: "100%", objectFit: "cover" , backgroundColor: 'transparent' }}
                src="/output.webm" // /publicディレクトリ内の動画を参照
                autoPlay
                muted
                playsInline
                onEnded={onComplete} // 動画終了時にも通知
            />
        </div>
    );
};
export default Splash;