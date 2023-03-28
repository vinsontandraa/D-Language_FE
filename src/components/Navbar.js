import { Button } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  let history = useHistory();

  return (
    <div className="navbar-container">
      <li>
        <span
          onClick={() => {
            history.push("/");
          }}
        >
          Language
        </span>
      </li>
      <li>
        <Button
          onClick={() => {
            history.push("/login");
          }}
          sx={{ backgroundColor: "green", color: "white" }}
        >
          Login
        </Button>
      </li>
      <li>
        <Button
          onClick={() => {
            history.push("/signup");
          }}
          sx={{ backgroundColor: "orange", color: "white" }}
        >
          Sign Up
        </Button>
      </li>
    </div>
  );
};

export default Navbar;
