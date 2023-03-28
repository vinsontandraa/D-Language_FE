import { Button, TextField } from '@mui/material'
import React from 'react'
import { useHistory } from 'react-router-dom'

const ForgotPassword = () => {
    let history = useHistory();
  return (
    <div>
      <h1>Reset Password</h1>
      <h4>Please enter your email address</h4>
      <TextField placeholder='Email'/>
      <br></br>
      <Button
          onClick={() => {
            history.push("/login");
          }}
          sx={{ backgroundColor: "orange", color: "white" }}
        >
          Cancel
        </Button>
        <Button
          onClick={() => {
            history.push("/createnewpassword");
          }}
          sx={{ backgroundColor: "green", color: "white" }}
        >
          Confirm
        </Button>
    </div>
  )
}

export default ForgotPassword
