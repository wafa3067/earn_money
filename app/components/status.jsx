import React from "react";

import SizedBox from "../components/sized_box";

function Status({ width, title, textcolor, weight, backgroundColor }) {
  return (
    <div
      className="main"
      style={{
        justifyContent: "start",
        alignItems: "center",
        display: "flex",
        flexDirection: "row",

        margin: "2px",
      }}
    >
      <div
        style={{
          paddingRight: "15px",
          height: "50px",
          alignContent: "center",
        }}
      >
        <div></div>
      </div>

      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            width: width,
          }}
        >
          <div>
            <p
              className="text"
              style={{
                textAlign: "center",
                color: textcolor,
                fontWeight: weight,
                width: "70px",
                padding: "5px",
                borderRadius: "20px",
                backgroundColor: backgroundColor,
              }}
            >
              {title}
            </p>
          </div>
        </div>

        <div
          style={{
            width: "2.4px",
            height: "20px",

            opacity: 0.12,
          }}
        >
          <SizedBox width={12} />
        </div>
      </div>
    </div>
  );
}

export default Status;
