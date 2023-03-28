import { Button, TextField } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
    let history = useHistory();
  return (
    <div>
      <h1>Welcome Back!</h1>
      <h4>Please login first</h4>
      <TextField fullWidth variant="outlined" placeholder="Email" />
      <br></br>
      <TextField fullWidth variant="outlined" placeholder="Password" />
      <br></br>
      <p>Forgot Password? <span className="click-here" onClick={()=>{history.push('/forgotpassword')}}>Click Here</span></p>
      <br></br>
      <Button sx={{ backgroundColor: "green", color: "white" }}>Login</Button>
      <br></br>
      <p>Dont have account? <span className="click-here" onClick={()=>{history.push('/signup')}}>Sign Up here</span></p>
    </div>
  );
};

export default Login;
