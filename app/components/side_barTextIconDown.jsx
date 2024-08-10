import React from "react";
import { useState } from "react";
import ArrowDown from "@mui/icons-material/KeyboardArrowDown"; // Import specific icon
import ArrowUp from "@mui/icons-material/KeyboardArrowUp"; // Import specific icon
import arrow from "../images/page-2/images/arrowdropdown-KJR.png";
function SideBarTextIconDown({
  image,
  text,
  click,
  process,
  width,
  icon = true,
}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  console.log("process ", process);
  const divStyle = {
    height: "42px",
    width: width,
    display: "flex",
    flexDirection: "row",

    alignItems: "center",
    backgroundColor: isHovered ? "rgba(234, 234, 255, 0.15)" : "#222222",
    // transition: "background-color 0.3s",
    borderRadius: "8px",
    // paddingLeft: "8px",
    justifyContent: "center",
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseOut={handleMouseLeave}
      style={divStyle}
      onClick={click}
    >
      <div
        style={{
          width: "245px",
          height: "42px",
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "42px",
            height: "42px",
            display: "flex", // Added display flex
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            className="is-rounded"
            src={image}
            width={"24px"}
            height={"24px"}
          />
        </div>

        <div
          style={{
            height: "42px",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <p
            style={{
              color: "#FFFFFF",

              textAlign: "center",
            }}
          >
            {text}
          </p>
        </div>
      </div>
      {icon ? (
        <div style={{ height: "42px" }}>
          {process == true ? (
            <ArrowDown
              style={{
                height: "42px",
                width: "30",
                color: "#FFFFFF",
                paddingRight: "10px",
              }}
            />
          ) : (
            <ArrowUp
              style={{
                height: "42px",
                width: "30",
                color: "#FFFFFF",
                paddingRight: "10px",
              }}
            />
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default SideBarTextIconDown;
