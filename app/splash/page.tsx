"use client";  // クライアントサイド専用
import "./../style/globals.css";
import { useEffect } from "react";

interface SplashProps {
    onComplete: () => void;  // スプラッシュが終了したときに親に通知
}

const Splash = ({ onComplete }: SplashProps) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();  // 8秒後に終了通知
        }, 8000);

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

// Splash コンポーネントのみをデフォルトエクスポート
export default Splash;
