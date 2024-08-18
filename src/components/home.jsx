"use client";
import { Button, Grid } from "@mui/material";
import { useRouter } from "next/navigation";

function HomeComponent() {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <Grid
      container
      spacing={8}
      sx={{
        height: "100vh",
        width: "100vw",
        justifyContent: "center",
      }}
    >
      <Grid item>
        <Button
          color="inherit"
          onClick={() => handleNavigation("/users")}
          className="text-2xl"
        >
          Users
        </Button>
      </Grid>
      <Grid item>
        <Button
          color="inherit"
          onClick={() => handleNavigation("/posts")}
          className="text-2xl"
        >
          Posts
        </Button>
      </Grid>
      <Grid item>
        <Button
          color="inherit"
          onClick={() => handleNavigation("/recipes")}
          className="text-2xl"
        >
          Recipes
        </Button>
      </Grid>
    </Grid>
  );
}

export default HomeComponent;
