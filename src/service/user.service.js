import headerToken from "@/app/api/headerToken";
import { userUrl } from "./constants";

export const getCurrentUserService = async () => {
  try {
    const header = await headerToken();
    const res = await fetch(`${userUrl}`, { headers: header });
    const data = await res.json();
    return data;
  } catch (e) {
    console.log("Error: ", e);
  }
};
