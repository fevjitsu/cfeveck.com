import React from "react";
import Login from "./features/login/Login";
import { Box, CssBaseline } from "@material-ui/core";
import "./App.css";
export default function App() {
  return (
    <Box>
      <CssBaseline />
      <Login />
    </Box>
  );
}
