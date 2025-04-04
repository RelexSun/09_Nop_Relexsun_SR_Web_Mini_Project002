import SidebarComponent from "../_components/SidebarComponent";
import "../../globals.css";

import TopNavComponent from "@/components/TopNavComponent";
import {
  getAllWorkspaceAction,
  getWorkspaceByIdAction,
} from "@/actions/workspaceAction";
// import { useRouter } from "next/navigation";

export default async function WorkspaceLayout({ children }) {
  const { payload } = await getAllWorkspaceAction();
  // const router = useRouter();
  // if (payload.length >= 1) router.push(`/workspace/${payload[0].workspaceId}`);

  // const data = await getWorkspaceByIdAction(workspaceId);
  // console.log(data);
  return (
    <main className="flex">
      <SidebarComponent workspace={payload} />

      <div className="w-full">
        {/* <TopNavComponent workspace={"user"} /> */}
        {children}
      </div>
    </main>
  );
}
