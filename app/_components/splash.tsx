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
        backgroundColor: "transparent" 
      }}
    >
      {/* 波のアニメーション */}
      <div className="wave-container">
        <div className="wave"><div className="sample"></div></div>
      </div>
    </div>
  );
};

export default Splash;
