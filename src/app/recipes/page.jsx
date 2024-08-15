import React from "react";
import getData from "../../../utils/getData";
import { Grid, Typography, Box } from "@mui/material";
import Link from "next/link";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

export default async function page() {
  const { recipes } = await getData("https://dummyjson.com/recipes");
  return (
    <Grid item>
      <Typography variant="h3" align="center">
        Recipes
      </Typography>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        flexWrap="wrap"
      >
        {recipes.map((recipe) => (
          <Typography key={recipe.id} variant="h4" align="center" m={1}>
            <Link href={`/recipes/${recipe.id}`}>
              <Button variant="outlined" color="secondary" endIcon={<SendIcon />}>
                {recipe.name}
              </Button>
            </Link>
          </Typography>
        ))}
      </Box>
    </Grid>
  );
}
