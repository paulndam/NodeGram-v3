import React from "react";
import { Box } from "@mui/material";
import { Post } from "../allComponents/AllComponents";
const Feeds = () => {
  return (
    <Box flex={4} p={2}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};

export default Feeds;
