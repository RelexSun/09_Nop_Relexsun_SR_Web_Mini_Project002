import headerToken from "@/app/api/headerToken";
import { baseWorkspaceUrl } from "../constants";

export const getAllWorkspaceService = async () => {
  try {
    const header = await headerToken();
    const res = await fetch(
      `${baseWorkspaceUrl}s?pageNo=0&pageSize=10&sortBy=workspaceId&sortDirection=ASC`,
      {
        headers: header,
      }
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log("Error: ", e);
  }
};

export const getWorkspaceByIdService = async (id) => {
  try {
    const header = await headerToken();
    const res = await fetch(
      `${baseWorkspaceUrl}/${id}?pageNo=0&pageSize=10&sortBy=workspaceId&sortDirection=ASC`,
      {
        headers: header,
      }
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log("Error: ", e);
  }
};

export const createWorkspaceService = async (workspaceName) => {
  try {
    const header = await headerToken();
    const res = await fetch(`${baseWorkspaceUrl}`, {
      method: "POST",
      headers: header,
      body: JSON.stringify(workspaceName),
      next: { tags: "workspace" },
    });
    const data = await res.json();
    console.log(data);
    return data;
  } catch (e) {
    console.log("Error: ", e);
  }
};

export const updateWorkspaceService = async (id, input) => {
  try {
    const header = await headerToken();
    const res = await fetch(`${baseWorkspaceUrl}/${id}`, {
      method: "PUT",
      headers: header,
      body: JSON.stringify(input),
      next: { tags: "updateWorkspace" },
    });
    const data = await res.json();
    console.log("service", data);
    return data;
  } catch (e) {
    console.log("Error: ", e);
  }
};

export const updateFavoriteService = async (id, favrorite) => {
  try {
    const header = await headerToken();
    const res = await fetch(
      `${baseWorkspaceUrl}/${id}/favorite?favorite=${favrorite}`,
      {
        method: "PATCH",
        headers: header,
      }
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log("Error: ", e);
  }
};
