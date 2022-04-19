import React, { useState } from "react";
import { Container, createTheme, Stack, ThemeProvider } from "@mui/material";
import { Box } from "@mui/system";
import {
  NavBar,
  SideBar,
  RightBar,
  Feeds,
  AddPost,
  SignUp,
  SignIn,
  Home,
  Profile,
} from "./components/allComponents/AllComponents";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Box>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    </Box>
  );
}

export default App;
