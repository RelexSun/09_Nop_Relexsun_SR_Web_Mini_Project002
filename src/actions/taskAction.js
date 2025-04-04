"use server";

import { getAllTaskById } from "@/service/task/task.service";

export const getAllTaskAction = async (id) => {
  try {
    const res = await getAllTaskById(id);
    return res;
  } catch (error) {
    console.error("Error in getAllWorkspaceAction:", error);
  }
};
