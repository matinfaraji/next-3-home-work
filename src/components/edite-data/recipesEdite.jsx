import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { addRecipe } from "../../../utils/actions";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export function UserDialog(props) {
  const { onClose, open } = props;
  const [recipeDetails, setRecipeDetails] = React.useState({
    name: "",
    cuisine: "",
    difficulty: "",
    prepTimeMinutes: "",
    cookTimeMinutes: "",
    servings: "",
    caloriesPerServing: "",
    ingredients: [],
    instructions: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipeDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const randomId = Math.floor(Math.random() * 1000000);
    addRecipe({ id: randomId, ...recipeDetails });
    onClose("submit");
  };

  return (
    <Dialog onClose={() => onClose()} open={open}>
      <DialogTitle>Add Recipe</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          name="name"
          label="Recipe Name"
          fullWidth
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="cuisine"
          label="Cuisine"
          fullWidth
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="difficulty"
          label="Difficulty"
          fullWidth
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="prepTimeMinutes"
          label="Prep Time (minutes)"
          type="number"
          fullWidth
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="cookTimeMinutes"
          label="Cook Time (minutes)"
          type="number"
          fullWidth
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="servings"
          label="Servings"
          type="number"
          fullWidth
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="caloriesPerServing"
          label="Calories per Serving"
          type="number"
          fullWidth
          variant="outlined"
          onChange={handleChange}
        />
        {/* Add fields for ingredients and instructions as needed */}
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
        Create Recipe
      </Button>

      <UserDialog open={open} onClose={handleClose} />
    </div>
  );
}