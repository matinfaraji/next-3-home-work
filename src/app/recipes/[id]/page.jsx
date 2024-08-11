import React from "react";
import getData from "../../../../utils/getData";
import { Grid, Typography } from "@mui/material";
export default async function page({ params }) {
  const sx = params.id;
  // console.log(sx);
  const ls = parseFloat(sx, 1);
  // console.log(ls);
  const recipesData = await getData("https://dummyjson.com/recipes");
  const dataRecipes = recipesData.recipes;
  // console.log(dataPosts);
  const found = dataRecipes.find((i) => i.id === ls);
  // console.log(found);
  return (
    <Grid item key="users">
      <Grid className="text-2xl">Recipe</Grid>

      <Typography key={found.id}>{found.name}</Typography>
    </Grid>
  );
}
