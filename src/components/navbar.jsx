"use client";
import { Button, Grid } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { ThemeSwitcher } from "./darkmode";

function NavbarComponent() {
  const router = useRouter();
  const pathname = usePathname();
  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <Grid
      container
      spacing={8}
      sx={{
        height: "20vh",
        width: "100vw",
        justifyContent: "center",
      }}
    >
      <Grid item>
        <Button
          color="inherit"
          onClick={() => handleNavigation("/")}
          className="text-2xl"
          sx={{
            borderBottom: pathname === "/" ? "2px solid red" : "none",
          }}
        >
          HOME
        </Button>
      </Grid>
      <Grid item>
        <Button
          color="inherit"
          onClick={() => handleNavigation("/users")}
          className="text-2xl"
          sx={{
            borderBottom: pathname === "/users" ? "2px solid red" : "none",
          }}
        >
          Users
        </Button>
      </Grid>
      <Grid item>
        <Button
          color="inherit"
          onClick={() => handleNavigation("/posts")}
          className="text-2xl"
          sx={{
            borderBottom: pathname === "/posts" ? "2px solid red" : "none",
          }}
        >
          Posts
        </Button>
      </Grid>
      <Grid item>
        <Button
          color="inherit"
          onClick={() => handleNavigation("/recipes")}
          className="text-2xl"
          sx={{
            borderBottom: pathname === "/recipes" ? "2px solid red" : "none",
          }}
        >
          Recipes
        </Button>
      </Grid>
      <Grid item>
        <ThemeSwitcher />
      </Grid>
    </Grid>
  );
}

export default NavbarComponent;
