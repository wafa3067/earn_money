import React from "react";
import "bulma/css/bulma.min.css";
// import {IosShare} from '@mui/material/IosShare'
import DeleteIcon from "@mui/icons-material/IosShareRounded";
import SizedBox from "./sized_box";

function CustomButtons({
  title,
  icon,
  width,
  color,
  textColor,
  borders,
  image,
  imageGap,
  iconGap,
  imageColor,
}) {
  return (
    <div
      style={{
        width: width ?? 123,
        paddingLeft: "8px",
        paddingRight: "8px",
        backgroundColor: color ?? "white",
        display: "flex",
        flexDirection: "row",
        height: "40px",
        justifyContent: icon ? "center" : "space-between",
        alignItems: "center",
        borderRadius: "8px",
        alignContent: "center",
        border: borders,
      }}
    >
      {icon ? (
        "  "
      ) : (
        <div>
          <DeleteIcon />
        </div>
      )}
      <SizedBox width={iconGap} />
      {image ? <img src={image} style={{ color: "red" }} /> : ""}
      <SizedBox width={imageGap} />
      <p
        style={{
          color: textColor ?? "#6D788D",
          fontWeight: "500",
          fontSize: "14px",
          textAlign: "center",
        }}
      >
        {title}
      </p>
    </div>
  );
}

export default CustomButtons;
