import Link from "next/link";
import getData from "../../../utils/getData";
import { Grid, Typography } from "@mui/material";
export default async function page() {
  const {recipes} = await getData("https://dummyjson.com/recipes");
  return (
    <Grid item>
      <Grid href="./recipes" className="text-2xl">
        Recipes
      </Grid>
      {recipes.map((recipe) => (
        <Typography key={recipe.id}>
          <Link href={`/recipes/${recipe.id}`}>{recipe.name}</Link>
        </Typography>
      ))}
    </Grid>
  );
}
