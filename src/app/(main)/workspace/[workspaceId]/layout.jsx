import TopNavComponent from "@/components/TopNavComponent";
import {
  getAllWorkspaceAction,
  getWorkspaceByIdAction,
} from "@/actions/workspaceAction";
import { getCurrentUserAction } from "@/actions/userAction";
import AddTask from "../../_components/AddTask";

export default async function WorkspaceIdLayout({ children, params }) {
  const { workspaceId } = await params;
  const { payload } = await getWorkspaceByIdAction(workspaceId);
  const { payload: user } = await getCurrentUserAction();

  // const data = await getWorkspaceByIdAction(workspaceId);
  // console.log(data);
  return (
    <div className="w-full h-screen relative">
      <TopNavComponent workspace={payload} user={user} />
      {children}
      <div className="absolute right-15 bottom-10">
        <AddTask />
      </div>
    </div>
  );
}
