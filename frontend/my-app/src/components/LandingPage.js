import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";


export default function LandingPage() {
  return (
    <>

      <h1 style={{ textAlign: "center" }}>Welcome TO THE LANDING PAGE!!!</h1>
      <Box sx={{ "& button": { m: 1 } }}
      style={{
        background: 'rgb(2,0,36)',
      background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(19,131,104,1) 16%, rgba(0,212,255,1) 100%)'
      }}>
        <div style={{  textAlign: "center" }}>
          <Link to="/signup">
            <Button variant="contained" size="large">
              Sign Up
            </Button>
          </Link>
          <Link to="/login">
            <Button variant="contained" size="large">
              Sign In
            </Button>
          </Link>
        </div>
      </Box>
    </>
  );
}
