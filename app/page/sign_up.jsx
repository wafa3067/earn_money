import React from "react";
import CustomButtons from "../components/button";
import logo from "../images/agency/svg/Logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { loginField } from "../redux/features/login";
import IconButton from "@mui/material/IconButton";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { auth } from "../firebaseConfig";

import { signInWithEmailAndPassword } from "firebase/auth";

function SignUp() {
  const dispatch = useDispatch();
  const stateValue = useSelector((state) => state.login);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        stateValue.Email,
        stateValue.Password
      );
      console.log("Logged in as:", userCredential.user);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        alignItems: "center",

        height: "100vh",
        width: "100vw",
      }}
      className="container is-flex is-justify-content-center is-align-items-center"
    >
      <div
        style={{
          boxShadow: "1px 1px 10px 5px #d3d3d3",
          padding: "50px 27px 0px 27px",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
          backgroundColor: "#ffffff",
          height: "460px",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            padding: "0px 0px 34px 0px",
          }}
        >
          <figure
            className="image is-32x32"
            style={{
              height: "35px",
              width: "35px",

              alignSelf: "center",
              margin: "0px 0px 0px 0px",
            }}
          >
            <img className="is-rounded" src={logo} />
          </figure>

          <h1 className="title is-4" style={{ padding: "0px 0px 0px " }}>
            Teons
          </h1>
        </div>
        <div
          style={{
            width: "400px",
            padding: "0px 0px 24px 0px",
            alignContent: "start",
            alignItems: "start",
          }}
        >
          <h1 className="title is-4 ">Welcome To Teons</h1>
        </div>

        <div
          style={{
            width: "400px",
            margin: "0px 0px 10px 0px",
            alignContent: "start",
            alignItems: "start",
          }}
        >
          <h1>please sign in your account and start the advanture </h1>
        </div>
        <div
          style={{ margin: "0px 0px 16px 0px", width: "400px", height: "50px" }}
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
            style={{ width: "394px" }}
            id="outlined-basic"
            label={"Email"}
            variant="outlined"
            name="Email"
            value={stateValue.Email}
            onChange={(e) => {
              const { name, value } = e.target;
              dispatch(loginField({ field: name, value }));
            }}
          />
        </div>

        <div
          style={{ margin: "0px 0px 16px 0px", width: "400px", height: "50px" }}
        >
          <FormControl
            sx={{
              width: "394px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
              },
            }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              name="Password"
              value={stateValue.Password}
              onChange={(e) => {
                const { name, value } = e.target;
                dispatch(loginField({ field: name, value }));
              }}
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          {/* <InputText
            name={"password"}
            placeholder={"Enter Password "}
            value={stateValue.password}
            data={(e) => {
              const { name, value } = e.target;
              dispatch(loginField(name, value));
              console.log(name, value);
            }}
          /> */}
        </div>
        <div
          style={{
            width: "400px",
            display: "flex",
            flexDirection: "row",
            padding: "0px 0px 15px 0px",
          }}
        >
          <input
            type="checkbox"
            style={{
              width: "16px",
              height: "16px",
              margin: "3px 3px 0px 0px",
              color: "#ffffff",
            }}
          />

          <h1>Remember Me</h1>
        </div>
        <div>
          <a onClick={handleLogin}>
            <CustomButtons
              icon={true}
              color={"#222222"}
              textColor={"white"}
              width={"394px"}
              title="Sign up"
              ButtonClass="button is-black text-center"
              style={{
                width: "400px",
                height: "50px",
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
