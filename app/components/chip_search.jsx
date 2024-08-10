import { Cancel, Close, ExpandLess, ExpandMore } from "@mui/icons-material";
import { TextField } from "@mui/material";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { activate, deactivate } from "../redux/features/activateArrowSlice";
import { add, remove, clear } from "../redux/features/openNamesSlice";
const ChipSearch = ({ width }) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const active = useSelector((state) => state.arrow.value);
  const dispatch = useDispatch();
  const nameL = useSelector((state) => state.names);

  return (
    <div style={{ position: "relative", width: "96%" }}>
      <div
        style={{
          position: "absolute",
          // top: "5px",
          // left: "5px",
          width: "100%",

          // border: "2px solid green",
          // backgroundColor: "green",
          // borderRadius: "40px",
        }}
      >
        <TextField
          value={nameL.length == 0 ? null : " "}
          disabled={true}
          onClick={toggleVisibility}
          style={{ width: "100%" }}
          // type="text"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
              // Adjust the border radius here
            },
          }}
          id="outlined-basic"
          label={"Search"}
          variant="outlined"
          onChange={() => {}}
        />
        <div
          onClick={() => {
            console.log(active);
            if (active == false) {
              dispatch(activate());
            } else {
              dispatch(deactivate());
            }
          }}
        >
          {active ? (
            <ExpandMore style={{ position: "absolute", right: 15, top: 15 }} />
          ) : (
            <ExpandLess style={{ position: "absolute", right: 15, top: 15 }} />
          )}
        </div>
        <div
          onClick={() => {
            dispatch(clear());
          }}
        >
          <Close style={{ position: "absolute", right: 40, top: 15 }} />
        </div>
      </div>
      <div
        style={{
          position: "absolute",

          scrollbarWidth: "thin",
          scrollbarGutter: "stable",
          overflowX: "auto",
          left: 10,
          // background: "red",
          // paddingLeft: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            padding: "10px 0",
            width: "94%",
          }}
        >
          {nameL.map((e) => (
            <div
              style={{
                width: "94%",
                display: "flex",
                flexDirection: "row",
                alignSelf: "center",
                alignContent: "center",
                alignItems: "center",
                backgroundColor: "rgb(239,239,240)",
                boxShadow: "2px 1px 2px grey",
                height: 35,
                paddingLeft: 8,
                paddingRight: 8,
                marginLeft: 8,
                marginRight: 8,
                marginTop: 4,
                marginBottom: 4,
                borderRadius: 20,
              }}
            >
              <div
                style={{
                  padding: "4px",
                  color: "rgba(76, 78, 100, 0.87)",
                  flexShrink: 0,
                  // Prevent shrinking of items
                  marginRight: "10px", // Space between items
                  whiteSpace: "nowrap", // Prevent text wrapping
                }}
              >
                {e}
              </div>
              <div
                onClick={() => {
                  dispatch(remove(e));
                }}
              >
                <Cancel color="rgba(76, 78, 100, 0.26);" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

ChipSearch.prototype = {
  list: PropTypes.array,
  ArrowClick: PropTypes.func,
  closeClick: PropTypes.func,
};

export default ChipSearch;
