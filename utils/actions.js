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
      
    revalidateTag("users");
  } catch (error) {
    console.error("Failed to add user:", error);
  }
}
export async function editUsers(id,updatedInfo) {
  try {
    parseInt(id)
    const response = await fetch(`http://localhost:3000/api/admin/users/${id}`, {
      method: 'PATCH',
      // headers: {
      //   'Content-Type': 'application/json',
      // },
      body: JSON.stringify(updatedInfo),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    revalidateTag('users');
  } catch (error) {
    console.error('Failed to edit user:', error);
  }
}