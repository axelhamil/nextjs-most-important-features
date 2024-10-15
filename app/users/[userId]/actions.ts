"use server";
import { revalidatePath } from "next/cache";

import { updateUser } from "@/app/users/data-access";

export type InputData = {
  name: string;
  userId: number;
  message: string;
};

export async function updateNameAction(
  prevState: InputData,
  formData: FormData,
): Promise<InputData> {
  await new Promise(async (resolve) => setTimeout(resolve, 1000));

  const userId = prevState.userId;
  const name = formData.get("name") as string;

  await updateUser(userId, name);

  revalidatePath(`/users/${userId}`);
  return {
    message: "success",
    name,
    userId,
  };
}
