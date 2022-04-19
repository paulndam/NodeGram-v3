import {
  AppBar,
  ThemeProvider,
  Toolbar,
  Typography,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  Button,
  Stack,
  Link,
} from "@mui/material";
import { Box, styled } from "@mui/system";
import React, { useState } from "react";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import { theme } from "../../theme";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { red, blue, purple, grey } from "@mui/material/colors";

const StyledTooBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  //   backgroundColor: "white",
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: blue[600],
  display: "flex",
  alignItems: "center",
  gap: "1px",
  [theme.breakpoints.up("lg")]: {
    display: "flex",
    "&:hover": {
      backgroundColor: blue[600],
    },
  },
  color: "white",
}));

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <ThemeProvider color={"primary.dark"} theme={theme}>
      <AppBar position="sticky">
        <StyledTooBar>
          <Link href="/" underline="none">
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block", color: "white" } }}
            >
              Node Gram
            </Typography>
          </Link>
          <ConnectWithoutContactIcon
            sx={{ display: { xs: "block", sm: "none" } }}
          />
          <Search>
            <InputBase placeholder="search ..." />
          </Search>
          <Stack spacing={2} direction="row">
            <Link href="/signup" underline="none">
              <StyledButton>SignUp</StyledButton>
            </Link>
            <Link href="/signin" underline="none">
              <StyledButton>SignIn</StyledButton>
            </Link>{" "}
          </Stack>
          <Icons>
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
            <Avatar
              sx={{ width: 30, height: 30 }}
              src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              onClick={(e) => setOpen(true)}
            />
          </Icons>

          <UserBox>
            <Avatar
              sx={{ width: 30, height: 30 }}
              src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              onClick={(e) => setOpen(true)}
            />
            <Typography variant="span">Danny</Typography>
          </UserBox>
        </StyledTooBar>

        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={(e) => setOpen(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <Link href="/profile" underline="none">
            <MenuItem>Profile</MenuItem>
          </Link>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </AppBar>
    </ThemeProvider>
  );
};

export default NavBar;
