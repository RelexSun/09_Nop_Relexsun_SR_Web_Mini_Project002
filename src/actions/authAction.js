"use server";

import { registerService } from "@/service/auth/register.service";

export const registerAction = async (formData) => {
  try {
    const res = await registerService(formData);
    return res;
  } catch (error) {
    console.error("Error in registerAction:", error);
    return { success: false, error: error.message };
  }
};

export const signOutAction = async () => {};
