"use server";

import {
  createWorkspaceService,
  getAllWorkspaceService,
  getWorkspaceByIdService,
  updateFavoriteService,
  updateWorkspaceService,
} from "@/service/workspace/workspace.service";
import { revalidateTag } from "next/cache";

export const getAllWorkspaceAction = async () => {
  try {
    const res = await getAllWorkspaceService();
    return res;
  } catch (error) {
    console.error("Error in getAllWorkspaceAction:", error);
  }
};

export const getWorkspaceByIdAction = async (id) => {
  try {
    const res = await getWorkspaceByIdService(id);
    return res;
  } catch (error) {
    console.error("Error in getAllWorkspaceAction:", error);
  }
};

export const createWorkspaceAction = async (data) => {
  try {
    const { workspaceName } = data;
    const res = await createWorkspaceService(workspaceName);
    revalidateTag("workspace");
    return res;
  } catch (e) {
    console.log("Error: ", e);
  }
};

export const updateFavoriteAction = async (id, favorite) => {
  try {
    const res = await updateFavoriteService(id, favorite);
    return res;
  } catch (e) {
    console.log("Error: ", e);
  }
};

export const updateWorkspaceAction = async (id, input) => {
  try {
    const res = await updateWorkspaceService(id, input);
    revalidateTag("updateWorkspace");
    return res;
  } catch (e) {
    console.log("Error: ", e);
  }
};
