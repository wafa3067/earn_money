import React from "react";
import Checked from "@mui/icons-material/CheckBox"; // Import specific icon
import Uncheck from "@mui/icons-material/CheckBoxOutlineBlankRounded"; // Import specific icon
import text_css from "../css/text_css.css";
import SizedBox from "../components/sized_box";

function TextComponent({
  active,
  ClickCheck,
  text,
  width,
  checking,
  line,
  textcolor,
  weight,
  backgroundColor,
}) {
  return (
    <div
      className="main"
      style={{
        justifyContent: "start",
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        backgroundColor: backgroundColor,
        // margin: "2px",
      }}
    >
      <div
        style={{
          paddingRight: "15px",
          height: "50px",
          alignContent: "center",
        }}
      >
        {checking ? (
          <div onClick={ClickCheck}>
            {active ? (
              <Checked
                style={{
                  color: "#222222",
                  opacity: 0.6,
                }}
              />
            ) : (
              <Uncheck
                style={{
                  color: "#4C4E64",
                  opacity: 0.6,
                }}
              />
            )}
          </div>
        ) : (
          <div></div>
        )}
      </div>

      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div style={{ width: width }}>
          <p className="text" style={{ color: textcolor, fontWeight: weight }}>
            {text}
          </p>
        </div>
        {line ? (
          <div
            style={{
              width: "2.4px",
              height: "20px",
              backgroundColor: "#4C4E64",

              opacity: 0.12,
            }}
          >
            <SizedBox width={12} />
          </div>
        ) : (
          <div
            style={{
              width: "2.4px",
              height: "20px",

              opacity: 0.12,
            }}
          >
            <SizedBox width={12} />
          </div>
        )}
      </div>
    </div>
  );
}

export default TextComponent;
