"use client";
import { Button } from "@mui/material";
import { deleteUser } from "../../../utils/actions";

export default function HandleDeleteUser({ id }) {
  const handleDelete = async () => {
    deleteUser(id);
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
