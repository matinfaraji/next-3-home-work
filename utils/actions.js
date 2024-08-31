"use server";

import { revalidateTag } from "next/cache";

export async function addUsers(userInfo) {
  try {
    const response = await fetch("http://localhost:3000/api/admin/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    revalidateTag("use");
  } catch (error) {
    console.error("Failed to add user:", error);
  }
}
export async function editUsers(id, updatedInfo) {
  parseInt(id);
  await fetch(`http://localhost:3000/api/admin/users/${id}`, {
    method: "PATCH",
    body: JSON.stringify(updatedInfo),
  });

  revalidateTag("use");
}
export async function deleteUser(id) {
  await fetch(`http://localhost:3000/api/admin/users/${id}`, { method: "DELETE" });
  revalidateTag("race");
}
export async function addRecipe(userInfo) {
  try {
    const response = await fetch("http://localhost:3000/api/admin/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    revalidateTag("rec");
  } catch (error) {
    console.error("Failed to add recipe:", error);
  }
}