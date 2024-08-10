import { Dialog, TextField } from "@mui/material";
import { useState, React, useEffect } from "react";
import SizedBox from "./sized_box";

import SearchOptions from "./search_options";
import ChipSearch from "./chip_search";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/api/fetchApi";
// import { makeStyles } from "@mui/system";

function SearchBar({ width }) {
  const users = useSelector((state) => state.users.users);
  const status = useSelector((state) => state.users.status);
  const error = useSelector((state) => state.users.error);
  const active = useSelector((state) => state.arrow.value);

  const [name, setName] = useState(false);
  const [location, setLocation] = useState(false);
  const [contract, setContract] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers()); // Fetch users when component mounts
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return (
      <div>
        <Dialog title="Loding" color="red" maxWidth="lg" />
      </div>
    );
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  var userName = [];
  var number = [];

  const names = [];
  const phoneNumbers = [];
  const data = (e) => {};

  if (users) {
    users.map((e, k) => {
      if (!names.includes(e)) {
        names.push(e.name);
      }
      if (!phoneNumbers.includes(e.number)) {
        phoneNumbers.push(e.number);
      }
      if (!userName.includes(e.userName)) {
        userName.push(e.userName);
      }
    });
  }
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "48px",

        // backgroundColor: "grey",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          // backgroundColor: "black",
          justifyContent: "space-between",
        }}
      >
        <ChipSearch width={width} />
      </div>

      {active && (
        <div
          style={{
            position: "absolute",
            top: 62,
            display: "flex",
            flexDirection: "column",
            borderRadius: "8px",
            // right: "10px",
            // bottom: "10px",
            boxShadow: "0 0 4px grey",
            width: "100%",
            height: "600px",
            overflow: "scroll",
            backgroundColor: "white",
            paddingBottom: "20px",
            zIndex: 1,
          }}
        >
          <TextField
            // type="text"

            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
                // Adjust the border radius here
              },
              "& fieldset": {
                borderColor: "grey", // Default border color
              },
              "&:hover fieldset": {
                borderColor: "red", // Hover border color
              },
              "&.Mui-focused fieldset": {
                borderColor: "grey", // Focused border color
              },
            }}
            style={{
              marginLeft: "8px",
              marginRight: "8px",
              marginTop: "8px",

              // position: "absolute",
              // left: "50px",
              top: "0px",
              width: "97%",

              // height: "40px",
              // border: "2px solid green",
            }}
            id="outlined-basic"
            label={"Search"}
            variant="outlined"
            onChange={data}
          />

          <SizedBox heights={"10px"} />
          <SearchOptions
            title="NAME"
            active={name}
            data={names}
            onPressed={() => {
              if (name == false) {
                setName(true);
              } else {
                setName(false);
              }
            }}
          />
          <SizedBox heights={"10px"} />

          <SearchOptions
            title="USER NAME"
            active={location}
            data={userName}
            onSelected={location}
            onPressed={() => {
              if (location == false) {
                setLocation(true);
              } else {
                setLocation(false);
              }
            }}
          />
          <SizedBox heights={"10px"} />

          <SearchOptions
            title="CONTRACT"
            active={contract}
            data={phoneNumbers}
            onSelected={number}
            onPressed={() => {
              if (contract == false) {
                setContract(true);
              } else {
                setContract(false);
              }
            }}
          />
        </div>
      )}
    </div>
  );
}

export default SearchBar;
