import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  Modal,
  Typography,
  Avatar,
  TextField,
  Stack,
  Button,
  ButtonGroup,
} from "@mui/material";
import { styled } from "@mui/system";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import ImageIcon from "@mui/icons-material/Image";
import DateRangeIcon from "@mui/icons-material/DateRange";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const Addpost = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="add post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          padding={3}
          bgcolor={"background.default"}
          color={"text.primary"}
          borderRadius={5}
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            color="gray"
            component="h2"
            textAlign="center"
          >
            Create a post
          </Typography>

          <UserBox>
            <Avatar
              src="https://material-ui.com/static/images/avatar/7.jpg"
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500} variant="span">
              Melody Ramos{" "}
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="what's on your mind"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotionsIcon color="primary" />
            <EmojiObjectsIcon color="secondary" />
            <ImageIcon color="success" />
            <VideoCameraBackIcon color="error" />
            <PersonAddAltIcon color="warning" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRangeIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Addpost;
