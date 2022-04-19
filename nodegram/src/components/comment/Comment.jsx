import React from "react";
import { CardHeader, TextField, Avatar, Icon } from "@mui/material";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import useStyles from "./styles";

const Comment = () => {
  const classes = useStyles();

  const commentBody = () => {
    return (
      <p className={classes.commentText}>
        {/*<Link to={`/user/${item.postedBy._id}`} className={classes.textDec}>
          {item.postedBy.name}
        </Link> */}
        <br />
        {/*{item.text} */}
        <span className={classes.commentDate}>
          {/*          {new Date(item.created).toDateString()} |
           */}
          <DeleteForeverIcon
            //   onClick={deleteComment(item)}
            className={classes.commentDelete}
            color="error"
          >
            Delete
          </DeleteForeverIcon>
        </span>
      </p>
    );
  };
  return (
    <div>
      <CardHeader
        avatar={
          <Avatar
            className={classes.smallAvatar}
            // src={`${process.env.REACT_APP_API}/api/users/photo/${
            //   auth.isAuthenticated().user._id
            // }`}
            src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          />
        }
        title={
          <TextField
            // onKeyDown={addComment}
            multiline
            rows={3}
            // value={text}
            // onChange={handleChange}
            placeholder="Write something ..."
            className={classes.commentField}
            margin="normal"
            variant="standard"
            sx={{ width: "100%" }}
            id="standard-multiline-static"
          />
        }
        className={classes.cardHeader}
      />
      <CardHeader
        avatar={
          <Avatar
            className={classes.smallAvatar}
            src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"

            // src={`${process.env.REACT_APP_API}/api/users/photo/${item.postedBy._id}`}
          />
        }
        // title={commentBody(item)}
        title={commentBody("test")}
        className={classes.cardHeader}
        // key={i}
      />
      {/*{props.comments.map((item, i) => {
        return (
          <CardHeader
            avatar={
              <Avatar
                className={classes.smallAvatar}
                src={`${process.env.REACT_APP_API}/api/users/photo/${item.postedBy._id}`}
              />
            }
            title={commentBody(item)}
            className={classes.cardHeader}
            key={i}
          />
        );
      })} */}
    </div>
  );
};

export default Comment;
