"use client";
import { Button } from "@mui/material";
import { deleteRecipe} from "../../../utils/actions";

export default function HandleDeleteUser({ id }) {
  const handleDelete = async () => {
    deleteRecipe(id);
  };
  return (
    <>
      <Button
        color="error"
        onClick={handleDelete}
        sx={{ width: "1px", height: "1px" }}
      >
        &times;
      </Button>
    </>
  );
}
