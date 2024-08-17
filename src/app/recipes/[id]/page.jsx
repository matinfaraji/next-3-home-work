import React from "react";
import getData from "../../../../utils/getData";
import {
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import Image from "next/image";
export default async function page({ params }) {
  const sx = params.id;
  // console.log(sx);
  const ls = parseFloat(sx, 1);
  // console.log(ls);
  const recipesData = await getData("https://dummyjson.com/recipes");
  const dataRecipes = recipesData.recipes;
  const recipe = dataRecipes.find((i) => i.id === ls);
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      align="center"
      sx={{ maxWidth: 500, margin: " auto", paddingBottom:20}}
    >
      <Grid item xs={12}>
        <Card>
          <Image
            src={recipe.image}
            alt={recipe.name}
            width={400}
            height={300}
          />
          <CardContent sx={{ justifyContent: "center" }}>
            <Typography variant="h5">{recipe.name}</Typography>
            <Typography color="text.secondary">
              {recipe.cuisine} - {recipe.difficulty}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Prep Time: {recipe.prepTimeMinutes} minutes | Cook Time:{" "}
              {recipe.cookTimeMinutes} minutes
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Servings: {recipe.servings} | Calories per Serving:{" "}
              {recipe.caloriesPerServing}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Rating: {recipe.rating} ({recipe.reviewCount} reviews)
            </Typography>
            <Typography variant="h6" component="div" sx={{ mt: 2 }}>
              Ingredients
            </Typography>
            <List>
              {recipe.ingredients.map((ingredient, index) => (
                <ListItem key={index}>
                  <ListItemText primary={ingredient} />
                </ListItem>
              ))}
            </List>
            <Typography variant="h6" component="div" sx={{ mt: 2 }}>
              Instructions
            </Typography>
            <List>
              {recipe.instructions.map((instruction, index) => (
                <ListItem key={index}>
                  <ListItemText primary={instruction} />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
