import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { addRecipe } from "../../../utils/actions";

export function UserDialog(props) {
  const { onClose, open } = props;
  const [recipe, setRecipe] = React.useState({
    name: "",
    cuisine: "",
    difficulty: "",
    prepTimeMinutes: "",
    cookTimeMinutes: "",
    servings: "",
    caloriesPerServing: "",
    rating: "",
    reviewCount: "",
    ingredients: "",
    instructions: "",
    image: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }));
    console.log(`${name}: ${value}`);
  };

  const handleSubmit = () => {
    const randomId = Math.floor(Math.random() * 1000000);
    console.log("Submitting recipe:", { id: randomId, ...recipe });
    addRecipe({
      id: randomId,
      ...recipe,
      ingredients: recipe.ingredients.split(","),
      instructions: recipe.instructions.split(".")
    });
    onClose("submit");
  };

  return (
    <Dialog open={open} onClose={() => onClose("cancel")}>
      <DialogTitle>Create Recipe</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          name="name"
          label="Recipe Name"
          type="text"
          fullWidth
          value={recipe.name}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="cuisine"
          label="Cuisine"
          type="text"
          fullWidth
          value={recipe.cuisine}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="difficulty"
          label="Difficulty"
          type="text"
          fullWidth
          value={recipe.difficulty}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="prepTimeMinutes"
          label="Prep Time (minutes)"
          type="number"
          fullWidth
          value={recipe.prepTimeMinutes}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="cookTimeMinutes"
          label="Cook Time (minutes)"
          type="number"
          fullWidth
          value={recipe.cookTimeMinutes}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="servings"
          label="Servings"
          type="number"
          fullWidth
          value={recipe.servings}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="caloriesPerServing"
          label="Calories per Serving"
          type="number"
          fullWidth
          value={recipe.caloriesPerServing}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="rating"
          label="Rating"
          type="number"
          fullWidth
          value={recipe.rating}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="reviewCount"
          label="Review Count"
          type="number"
          fullWidth
          value={recipe.reviewCount}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="ingredients"
          label="Ingredients (comma separated)"
          type="text"
          fullWidth
          value={recipe.ingredients}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="instructions"
          label="Instructions (period separated)"
          type="text"
          fullWidth
          value={recipe.instructions}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="image"
          label="Image URL"
          type="text"
          fullWidth
          value={recipe.image}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onClose("cancel")} color="primary">
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
        Create recipe
      </Button>
      <UserDialog open={open} onClose={handleClose} />
    </div>
  );
}
