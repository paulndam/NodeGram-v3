import React, { useState, useEffect } from "react";
import { createTheme, Stack, ThemeProvider } from "@mui/material";
import { Box } from "@mui/system";
import {
  NavBar,
  SideBar,
  RightBar,
  Feeds,
  AddPost,
} from "../allComponents/AllComponents.js";

const Home = () => {
  const [mode, setMode] = useState(
    localStorage.getItem("Current-Mode", "light")
  );

  useEffect(() => {
    localStorage.setItem("Current-Mode", mode);
  }, [mode]);

  const handleChange = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <Box>
      <NavBar />
      <ThemeProvider theme={darkTheme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <SideBar setMode={handleChange} />
            <Feeds />
            <RightBar />
          </Stack>
          <AddPost />
        </Box>
      </ThemeProvider>
    </Box>
  );
};

export default Home;
