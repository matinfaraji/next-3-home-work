"use client";
import { Grid, Typography, Box } from "@mui/material";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useRouter } from "next/navigation";
import UserDialogDemo from "./add-data/recipesdata";
import HandleDeleteUser from "./delete-data/deleteRecipe";

export default async function RecipesComponent({ card }) {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };
  return (
    <>
      <Grid item>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          flexWrap="wrap"
        >
          {card.map((recipe) => (
            <Typography key={recipe.id} variant="h4" align="center" m={1}>
              <Button
                variant="outlined"
                color="secondary"
                endIcon={<SendIcon />}
                onClick={() => handleNavigation(`/recipes/${recipe.id}`)}
              >
                {recipe.id}, {recipe.name}
              </Button>
              <HandleDeleteUser id={recipe.id} />
            </Typography>
          ))}
        </Box>
        <UserDialogDemo />
      </Grid>
    </>
  );
}
