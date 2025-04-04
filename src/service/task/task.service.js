import headerToken from "@/app/api/headerToken";
import { baseTaskUrl } from "../constants";

export const getAllTaskById = async (id) => {
  try {
    const header = await headerToken();
    const res = await fetch(
      `${baseTaskUrl}/${id}?pageNo=0&pageSize=10&sortBy=taskId&sortDirection=ASC`,
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
