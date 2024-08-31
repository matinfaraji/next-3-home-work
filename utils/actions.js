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
  await fetch(`http://localhost:3000/api/admin/users/${id}`, {
    method: "DELETE",
  });
  revalidateTag("use");
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
export async function editRecipe(id, updatedInfo) {
  await fetch(`http://localhost:3000/api/admin/recipes/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedInfo),
  });

  revalidateTag("rec");
}
export async function deleteRecipe(id) {
  await fetch(`http://localhost:3000/api/admin/recipes/${id}`, {
    method: "DELETE",
  });
  revalidateTag("rec");
}
export async function addPost(userInfo) {
  try {
    const response = await fetch("http://localhost:3000/api/admin/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    revalidateTag("pos");
  } catch (error) {
    console.error("Failed to add recipe:", error);
  }
}
export async function editPost(id, updatedInfo) {
  await fetch(`http://localhost:3000/api/admin/posts/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedInfo),
  });

  revalidateTag("pos");
}
export async function deletePost(id) {
  await fetch(`http://localhost:3000/api/admin/posts/${id}`, {
    method: "DELETE",
  });
  revalidateTag("pos");
}