"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import { editPost } from "../../../utils/actions";

export function UserDialog({ formData, onClose, open }) {
  const [post, setPost] = useState(formData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const postId = parseInt(post.id);
    const updatedPost = {
      title: post.title,
      body: post.body,
      tags: post.tags,
      views: parseInt(post.views),
      reactions: {
        likes: parseInt(post.reactions.likes),
        dislikes: parseInt(post.reactions.dislikes),
      },
      userId: post.userId,
    };

    await editPost(postId, updatedPost);
    onClose("submit");
  };

  return (
    <Dialog onClose={() => onClose()} open={open}>
      
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          name="title"
          label="Title"
          type="text"
          fullWidth
          variant="outlined"
          value={post.title}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="body"
          label="Body"
          type="text"
          fullWidth
          variant="outlined"
          value={post.body}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="tags"
          label="Tags (comma separated)"
          type="text"
          fullWidth
          variant="outlined"
          value={post.tags}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="views"
          label="Views"
          type="number"
          fullWidth
          variant="outlined"
          value={post.views}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="likes"
          label="Likes"
          type="number"
          fullWidth
          variant="outlined"
          value={post.reactions.likes}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="dislikes"
          label="Dislikes"
          type="number"
          fullWidth
          variant="outlined"
          value={post.reactions.dislikes}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="userId"
          label="User ID"
          type="text"
          fullWidth
          variant="outlined"
          value={post.userId}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onClose()} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default function UserDialogDemo({ popo }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Edit Recipe
      </Button>
      <UserDialog formData={popo} open={open} onClose={handleClose} />
    </div>
  );
}