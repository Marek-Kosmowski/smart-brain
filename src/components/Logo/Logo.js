import React from "react";
import Tilty from "react-tilty";
import brain from "./brain.png";
import "../Logo/Logo.css";

const Logo = () => {
  return (
    <div className="ma2">
      <Tilty className="tilty shadow-2 ml4" glare scale={1.05} maxGlare={0.5}>
        <div className="inner pa3">
          <img src={brain} alt="logo" />
        </div>
      </Tilty>
    </div>
  );
};

export default Logo;
