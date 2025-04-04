import { getAllTaskAction } from "@/actions/taskAction";
import WorkSpaceComponent from "../../_components/WorkSpaceComponent";

const page = async ({ params }) => {
  const { workspaceId } = await params;
  const { payload } = await getAllTaskAction(workspaceId);

  return (
    <div className="w-full max-w-[1400px] mx-auto">
      <WorkSpaceComponent payload={payload} />
    </div>
  );
};

export default page;
