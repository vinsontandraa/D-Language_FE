import { Button, TextField } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";

const Signup = () => {
    let history = useHistory();
  return (
    <div>
      <h1>Lets Join D'Language</h1>
      <h4>Please register first</h4>
      <TextField fullWidth variant="outlined" placeholder="Name" />
      <br></br>
      <TextField fullWidth variant="outlined" placeholder="Email" />
      <br></br>
      <TextField fullWidth variant="outlined" placeholder="Password" />
      <br></br>
      <TextField fullWidth variant="outlined" placeholder="Confirm Password" />
      <br></br>
      <Button sx={{ backgroundColor: "green", color: "white" }}>Sign Up</Button>
    <br></br>
    <p>Have account? <span className="click-here" onClick={()=>{history.push('/login')}}>Login here</span></p>
    </div>
  );
};

export default Signup;
