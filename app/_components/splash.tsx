"use client";
import "./../style/globals.css";

const Splash = () => {
  return (
    <div
      className="move"
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "transparent",
        position: "relative"
      }}
    >
      {/* 波のアニメーション */}
      <div className="wave-container">
        <div className="wave">
          <div className="sample">
            <img src="/header.png" alt="header" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Splash;
