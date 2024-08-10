import React, { useState } from "react";
import "bulma/css/bulma.min.css";
import editMenu from "../images/agency/svg/verticalMenu.svg";
import edit from "../images/agency/svg/edit.svg";
import bill from "../images/agency/svg/bill.svg";
import SizedBox from "./sized_box";
function StackDropDown({ onEditClick, onBillClick }) {
  const [active, setActive] = useState(false);
  const [number1, setNumber1] = useState(false);
  const [number2, setNumber2] = useState(false);

  const handleActivate1 = (val) => {
    setNumber1(true);
  };
  const handleDeactivate1 = (val) => {
    setNumber1(false);
  };
  const handleActivate2 = (val) => {
    setNumber2(true);
  };
  const handleDeactivate2 = (val) => {
    setNumber2(false);
  };

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <a
        style={{ position: "relative" }}
        onClick={() => {
          setActive(!active);
        }}
      >
        <img src={editMenu} />
      </a>
      {active ? (
        <div
          style={{
            position: "absolute",
            height: "88px",
            width: "110px",
            backgroundColor: "white",
            borderRadius: "10px",
            paddingTop: "8px",
            paddingBottom: "8px",
            boxShadow: "2px 2px 4px grey",

            zIndex: 1,
          }}
        >
          <div
            onMouseEnter={handleActivate1}
            onMouseLeave={handleDeactivate1}
            key={1}
            style={{
              width: "110px",
              left: "-40px",
              height: "36px",

              backgroundColor: number1 === true ? "rgb(246,246,247)" : "white",
            }}
          >
            <div
              onClick={onEditClick}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "36px",
              }}
            >
              <img src={edit} />
              <SizedBox width={"10px"} />
              <p>Edit</p>
            </div>
          </div>
          <div
            key={2}
            onMouseEnter={handleActivate2}
            onMouseLeave={handleDeactivate2}
            style={{
              width: "110px",
              left: "-40px",
              height: "36px",
              backgroundColor: number2 === true ? "rgb(246,246,247)" : "white",
            }}
          >
            <div
              onClick={onBillClick}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "36px",
              }}
            >
              <img src={bill} />
              <SizedBox width={"10px"} />
              <p>Billing</p>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default StackDropDown;
