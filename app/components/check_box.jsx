import React, { useState } from "react";
import PropTypes from "prop-types";

import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/features/openNamesSlice";

function CheckBox({ title }) {
  const [check, setCheck] = useState(false);
  const nameL = useSelector((state) => state.names);
  const dispatch = useDispatch();

  const onPressed = () => {
    if (nameL.includes(title)) {
      dispatch(remove(title));
    } else {
      dispatch(add(title));
    }
  };

  return (
    <div
      onClick={onPressed}
      style={{
        borderRadius: "8px",
        border:
          nameL.includes(title) == true
            ? "2px solid green"
            : "2px solid rgba(76, 78, 100, 0.60)",
        margin: "8px",
        paddingLeft: "12px",
        paddingRight: "12px",
        paddingTop: "4px",
        paddingBottom: "4px",
        textAlign: "center",
      }}
    >
      <p
        // onClick={onClick}
        style={{
          color: "rgba(76, 78, 100, 0.87)",
        }}
      >
        {title}
      </p>
    </div>
  );
}
CheckBox.propTypes = {
  title: PropTypes.string.isRequired, // title must be a string and is required
  selected: PropTypes.array,
  //   onClick: PropTypes.func,
  // count must be a number
  // onClick must be a function
};

export default CheckBox;
