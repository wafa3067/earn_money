import React from "react";

import SizedBox from "../components/sized_box";
import deleteIcon from "../images/agency/svg/delete.svg";
import editMenu from "../images/agency/svg/verticalMenu.svg";
import plus from "../images/agency/svg/plus.svg";
import StackDropDown from "./stackDropDown";
function Action({ width, editClick, billClick }) {
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
        <div style={{ width: width, display: "flex" }}>
          <img src={deleteIcon} />
          <SizedBox width={"20px"} />
          <StackDropDown onBillClick={billClick} onEditClick={editClick} />
          <SizedBox width={"20px"} />
          <img src={plus} />
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

export default Action;
