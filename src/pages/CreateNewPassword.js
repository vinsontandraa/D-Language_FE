import { Button, TextField } from '@mui/material'
import React from 'react'
import { useHistory } from 'react-router-dom'

const CreateNewPassword = () => {
    let history = useHistory();
  return (
    <div>
      <h1>Create Password</h1>
      <TextField placeholder='New Password'/>
      <br></br>
      <TextField placeholder='Confirm New Password'/>
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
          Submit
        </Button>
    </div>
  )
}

export default CreateNewPassword
