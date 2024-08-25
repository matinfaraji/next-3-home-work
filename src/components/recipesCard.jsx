"use client";
import { Grid, Typography, Box } from "@mui/material";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useRouter } from "next/navigation";

export default async function RecipesComponent({card}) {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };
  return (
    <>
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
          {card.map((recipe) => (
            <Typography key={recipe.id} variant="h4" align="center" m={1}>
              <Button
                variant="outlined"
                color="secondary"
                endIcon={<SendIcon />}
                onClick={() => handleNavigation(`/recipes/${recipe.id}`)}
              >
                {recipe.name}
              </Button>
            </Typography>
          ))}
        </Box>
      </Grid>
    </>
  );
}
