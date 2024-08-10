import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import { useState } from "react";

function SideBarTextIcon({ image, text, activeImage = false, width, padL }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const divStyle = {};

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseOut={handleMouseLeave}
      style={{
        height: "42px",
        width: width,
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        backgroundColor: isHovered ? "rgba(234, 234, 255, 0.15)" : "#222222",
        borderRadius: "8px",
        paddingLeft: padL ? "30px" : "0px",
      }}
    >
      {!activeImage ? (
        <div
          style={{
            width: "42px",
            height: "42px",

            display: "flex", // Added display flex
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={image} width={"24px"} height={"24px"} />
        </div>
      ) : (
        <p
          style={{
            height: "50px",
            color: "#FFFFFF",
            fontSize: "25px",
            paddingRight: "10px",
            fontWeight: "bolder",
          }}
        >
          .
        </p>
      )}
      <div style={{ height: "42px", display: "flex", alignItems: "center" }}>
        <p
          style={{
            color: "#FFFFFF",
            textAlign: "center",
            flexFlow: "row",
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
}

export default SideBarTextIcon;
