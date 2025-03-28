"use client";
import Image from "next/image";
import "./../style/globals.css";

const Splash = () => {
    return (
        <div style={{ width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "transparent" }}>
            <video
                autoPlay
                muted
                playsInline
                // 古いSafari向け
                webkit-playsinline="true"
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
                <source src="/cloud_and_water_transparent.mov" type="video/quicktime" />
                <source src="/output.webm" type="video/webm" />
            </video>
        </div>
    );
};

export default Splash;
