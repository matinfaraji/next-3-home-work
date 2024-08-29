"use server";

import { revalidateTag } from "next/cache";

export async function addUsers(usersInformation) {
  await fetch("http://localhost:3000/api/admin/users", {
    method: "POST",
    body: JSON.stringify({ usersInformation }),
  });
  revalidateTag("users");
}
