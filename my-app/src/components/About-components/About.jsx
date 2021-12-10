import React from "react";
import "./About.css";
import ImageWheel from "./ImageWheel";
import { WheelData } from "./WheelData";

function About() {
  return (
    <div>
      {/* använder bildhjulets data som props till barnet där itereringen sker */}
      <ImageWheel wheel={WheelData} />;
    </div>
  );
}

export default About;
