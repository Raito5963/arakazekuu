"use client";
import { useEffect, useState } from "react";
import "./../style/globals.css";

interface SplashProps {
    onComplete: () => void; // スプラッシュ終了時の通知
}

const Splash = ({ onComplete }: SplashProps) => {
    const [videoSource, setVideoSource] = useState<string | null>(null); // 初期値をnullに設定

    useEffect(() => {
        // Safariかどうかを判定
        const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        // Safariの場合は.mov、それ以外は.webm
        setVideoSource(isSafari ? "/input.mov" : "/output.webm");

        const timer = setTimeout(() => {
            onComplete(); // 4秒後に終了通知
        }, 4000);

        return () => clearTimeout(timer);
    }, [onComplete]);

    if (!videoSource) {
        return null; // videoSourceがnullの間は何も表示しない
    }

    return (
        <div style={{ width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "transparent" }}>
            <video
                style={{ width: "100%", height: "100%", objectFit: "cover",backgroundColor: "transparent"  }}
                autoPlay
                muted
                playsInline
                onEnded={onComplete} // 動画終了時にも通知
            >
                <source src={videoSource} />
            </video>
        </div>
    );
};

export default Splash;
