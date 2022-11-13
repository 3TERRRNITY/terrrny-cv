import React from "react";
import "../hero/Hero.scss";
import heroImage from "../../images/bg-hero2.jpg";

export default function Hero() {
  const backgroundImageStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.6)), url("${heroImage}")`,
  };

  return (
    <div className="hero" style={backgroundImageStyle}>
      <p className="welcome-text">Privet! Menya Fedya zovut!</p>
    </div>
  );
}
