import React from "react";
import "bulma/css/bulma.min.css";
import TextField from "@mui/material/TextField";

function InputField({ name, placeholder, data, value }) {
  return (
    <div>
      <TextField
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",

            // Adjust the border radius here
          },
          "& filedset": {
            borderColor: "green",
          },
          "&:hover fieldset": {
            borderColor: "red", // Hover border color
          },
        }}
        id="outlined-basic"
        label={placeholder}
        variant="outlined"
        name={name}
        value={value}
        style={{ width: "394px" }}
        onChange={data}
        // name={name}
      />
    </div>
    // <input
    //   type="text"
    //   name={name}
    //   className="input s-small"
    //   placeholder={placeholder}
    //   onChange={data}
    //   style={{ height: "50px" }}
    // />
  );
}

export default InputField;
