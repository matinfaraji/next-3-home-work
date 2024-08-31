import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { addPost } from "../../../utils/actions";

export function UserDialog(props) {
  const { onClose, open } = props;
  const [recipe, setRecipe] = React.useState({
    title: "",
    body: "",
    tags: "",
    views: 0,
    reactions: {
      likes: 0,
      dislikes: 0,
    },
    userId: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipe((prev) => ({
      ...prev,
      [name]:
        name === "tags" ? value.split(",").map((tag) => tag.trim()) : value,
    }));
  };

  const handleSubmit = () => {
    const newPost = {
      id: Math.floor(Math.random() * 1000000),
      ...recipe,
    };
    addPost(newPost);
    onClose("submit");
  };

  return (
    <Dialog onClose={() => onClose()} open={open}>
      <DialogTitle>Create Post</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          name="title"
          label="Title"
          type="text"
          fullWidth
          variant="outlined"
          value={recipe.title}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="body"
          label="Body"
          type="text"
          fullWidth
          variant="outlined"
          value={recipe.body}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="tags"
          label="Tags (comma separated)"
          type="text"
          fullWidth
          variant="outlined"
          value={recipe.tags}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="views"
          label="Views"
          type="number"
          fullWidth
          variant="outlined"
          value={recipe.views}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="likes"
          label="Likes"
          type="number"
          fullWidth
          variant="outlined"
          value={recipe.reactions.likes}
          onChange={(e) =>
            setRecipe((prev) => ({
              ...prev,
              reactions: {
                ...prev.reactions,
                likes: e.target.value,
              },
            }))
          }
        />
        <TextField
          margin="dense"
          name="dislikes"
          label="Dislikes"
          type="number"
          fullWidth
          variant="outlined"
          value={recipe.reactions.dislikes}
          onChange={(e) =>
            setRecipe((prev) => ({
              ...prev,
              reactions: {
                ...prev.reactions,
                dislikes: e.target.value,
              },
            }))
          }
        />
        <TextField
          margin="dense"
          name="userId"
          label="User ID"
          type="text"
          fullWidth
          variant="outlined"
          value={recipe.userId}
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

export default function UserDialogDemo() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Create post
      </Button>
      <UserDialog open={open} onClose={handleClose} />
    </div>
  );
}
