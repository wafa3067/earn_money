import React from "react";
import CustomButtons from "./button";
import account from "../images/agency/svg/accountW.svg";
import accountW from "../images/agency/svg/accountb.svg";
import pakage from "../images/agency/svg/package.svg";
import packagew from "../images/agency/svg/packageW.svg";
import contract from "../images/agency/svg/contract.svg";
import contractW from "../images/agency/svg/contractW.svg";
import preview from "../images/agency/svg/preview.svg";
import previewW from "../images/agency/svg/PreviewW.svg";
import { activeData } from "../redux/features/uperSlice";
import { useDispatch, useSelector } from "react-redux";

function UperButtons() {
  const dispatch = useDispatch();
  const check = useSelector((state) => state.uper);

  console.log(check);

  return (
    <div style={{ display: "flex" }}>
      <a
        onClick={() => {
          if (check[0] !== true) {
            dispatch(activeData({ index: 0, value: true }));
            dispatch(activeData({ index: 1, value: false }));
            dispatch(activeData({ index: 2, value: false }));
            dispatch(activeData({ index: 3, value: false }));
          }
        }}
      >
        <CustomButtons
          color={check[0] === true ? "#222222" : "white"}
          icon={true}
          imageGap={"8px"}
          width={"143px"}
          image={check[0] === true ? account : accountW}
          title={"Account"}
          textColor={check[0] === true ? "white" : "rgba(76, 78, 100, 0.87)"}
        />
      </a>

      <a
        onClick={() => {
          if (check[1] !== true) {
            dispatch(activeData({ index: 0, value: false }));
            dispatch(activeData({ index: 1, value: true }));
            dispatch(activeData({ index: 2, value: false }));
            dispatch(activeData({ index: 3, value: false }));
          }
        }}
      >
        <CustomButtons
          icon={true}
          imageGap={"8px"}
          width={"138px"}
          title={"Package"}
          color={check[1] === true ? "#222222" : "white"}
          image={check[1] === true ? packagew : pakage}
          textColor={check[1] === true ? "white" : "rgba(76, 78, 100, 0.87)"}
        />
      </a>
      <a
        onClick={() => {
          if (check[2] !== true) {
            dispatch(activeData({ index: 0, value: false }));
            dispatch(activeData({ index: 1, value: false }));
            dispatch(activeData({ index: 2, value: true }));
            dispatch(activeData({ index: 3, value: false }));
          }
        }}
      >
        <CustomButtons
          color={check[2] === true ? "#222222" : "white"}
          image={check[2] === true ? contractW : contract}
          textColor={check[2] === true ? "white" : "rgba(76, 78, 100, 0.87)"}
          icon={true}
          imageGap={"8px"}
          width={"138px"}
          title={"Contract"}
        />
      </a>
      <a
        onClick={() => {
          if (check[3] !== true) {
            dispatch(activeData({ index: 0, value: false }));
            dispatch(activeData({ index: 1, value: false }));
            dispatch(activeData({ index: 2, value: false }));
            dispatch(activeData({ index: 3, value: true }));
          }
        }}
      >
        <CustomButtons
          icon={true}
          imageGap={"8px"}
          width={"138px"}
          title={"Preview"}
          color={check[3] === true ? "#222222" : "white"}
          image={check[3] === true ? previewW : preview}
          textColor={check[3] === true ? "white" : "rgba(76, 78, 100, 0.87)"}
        />
      </a>
    </div>
  );
}

export default UperButtons;
