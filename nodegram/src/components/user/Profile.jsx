import {
  Box,
  Card,
  Container,
  Avatar,
  Grid,
  Typography,
  Link,
  Button,
  Tab,
  Tabs,
  AppBar,
} from "@mui/material";
import propTypes from "prop-types";
import React, { useState } from "react";
import { NavBar, Post } from "../allComponents/AllComponents.js";
import HeaderImg4 from "../../Images/Header-Img2.png";
import Icon from "@mui/material/Icon";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import T1 from "../../Images/testimonial-6-2.jpg";
import T2 from "../../Images/testimonial-6-3.jpg";
import T3 from "../../Images/blog-9-4.jpg";
import T4 from "../../Images/blog2.jpg";
import face2Img from "../../Images/face2.png";

const Profile = () => {
  const [value, setValue] = useState(0);
  const [tab, setTab] = useState(0);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };
  return (
    <React.Fragment>
      <NavBar />
      <Box
        sx={{
          variant: "contained",
          bgColor: "transparent",
          color: "dark",
          opacity: 1,
          borderRadius: "none",
          shadow: "none",
          coloredShadow: "none",
        }}
      >
        <Box
          minHeight="40rem"
          width="100%"
          sx={{
            backgroundImage: `url(${HeaderImg4})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        />
        <Card
          sx={{
            p: 9,
            mx: { xs: 2, lg: 3 },
            mt: -8,
            mb: 4,
            backgroundColor: "white",
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: 1,
          }}
        >
          <Box component="section" py={{ xs: 6, sm: 12 }}>
            <Container>
              <Grid
                container
                item
                xs={12}
                md={12}
                lg={12}
                justifyContent="center"
                mx="auto"
              >
                <Box mt={{ xs: -16, md: -20 }} textAlign="center">
                  <Avatar
                    src={face2Img}
                    alt="Burce Mars"
                    size="xxl"
                    shadow="xl"
                    sx={{ width: 56, height: 56 }}
                  />
                </Box>

                <Grid container justifyContent="center" py={6}>
                  <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      mb={1}
                    >
                      <Typography variant="h3">Michael Eli</Typography>
                      <Link href="/user/profile/update" underline="none">
                        <Button
                          variant="outlined"
                          color="info"
                          size="small"
                          sx={{
                            borderRadius: "5px",
                            color: "info",
                            circular: false,
                            iconOnly: false,
                          }}
                        >
                          Update
                        </Button>
                      </Link>
                    </Box>

                    <Grid container spacing={3} mb={3}>
                      <Grid item>
                        <Typography
                          component="span"
                          variant="body2"
                          fontWeight="bold"
                        >
                          3&nbsp;
                        </Typography>
                        <Typography
                          component="span"
                          variant="body2"
                          color="text"
                        >
                          Tours
                        </Typography>
                      </Grid>
                    </Grid>

                    <Typography variant="body1" fontWeight="light" color="text">
                      Decisions: If you can&apos;t decide, the answer is no. If
                      two equally difficult paths, choose the one more painful
                      in the short term (pain avoidance is creating an illusion
                      of equality). Choose the path that leaves you more
                      equanimous. <br />
                      <Typography
                        component="a"
                        href="#"
                        variant="body1"
                        fontWeight="light"
                        color="info"
                        mt={3}
                        sx={{
                          width: "max-content",
                          display: "flex",
                          alignItems: "center",

                          "& .material-icons-round": {
                            transform: `translateX(3px)`,
                            transition:
                              "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                          },

                          "&:hover .material-icons-round, &:focus .material-icons-round":
                            {
                              transform: `translateX(6px)`,
                            },
                        }}
                      >
                        More about me{" "}
                        <Icon sx={{ fontWeight: "bold" }}>
                          <ArrowForwardIcon />
                        </Icon>
                      </Typography>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Card>
      </Box>
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <AppBar sx={{ bgcolor: "background.paper" }} position="sticky">
          <Tabs
            value={tab}
            onChange={handleChange}
            variant="fullWidth"
            centered
          >
            <Tab label="Posts" />
            <Tab label="Following" />
            <Tab label="Followers" />
          </Tabs>
        </AppBar>
        {tab === 0 && (
          <TabContainer>
            <Post />
            <Post />
            <Post />
          </TabContainer>
        )}
        {tab === 1 && (
          <TabContainer>
            <Typography variant="h6">Following</Typography>
          </TabContainer>
        )}
        {tab === 2 && (
          <TabContainer>
            <Typography variant="h6">Followers</Typography>
          </TabContainer>
        )}
      </Box>
    </React.Fragment>
  );
};

const TabContainer = (props) => {
  return (
    <Typography component="div" style={{ padding: 8 * 2 }}>
      {props.children}
    </Typography>
  );
};

TabContainer.propTypes = {
  children: propTypes.node.isRequired,
};

export default Profile;
