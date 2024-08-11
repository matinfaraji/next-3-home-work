
import getData from "../../../utils/getData";
import { Grid, Typography } from "@mui/material";
export default async function page() {
  const recipesData = await getData("https://dummyjson.com/recipes");
  const dataRecipes = recipesData.recipes;
  return (
    <Grid item>
    <Grid href="./recipes" className="text-2xl">
      Recipes
    </Grid>
    {dataRecipes.map((recipe) => (
      <Typography key={recipe.id}>{recipe.name}</Typography>
    ))}
  </Grid>
  );
}
