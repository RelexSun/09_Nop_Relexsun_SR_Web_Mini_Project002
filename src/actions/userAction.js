"use server";
import { getCurrentUserService } from "@/service/user.service";

export const getCurrentUserAction = async () => {
  try {
    const res = await getCurrentUserService();
    return res;
  } catch (e) {
    console.log("Error: ", e);
  }
};
