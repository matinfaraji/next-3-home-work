"use client";
import { Button } from "@mui/material";
import { deletePost} from "../../../utils/actions";

export default function HandleDeleteUser({ id }) {
  const handleDelete = async () => {
    deletePost(id);
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
