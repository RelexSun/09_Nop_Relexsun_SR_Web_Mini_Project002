import Logo from "@/components/logo";

import LogoutComponent from "./LogoutComponent";

import WorkspaceSideComponent from "./WorkspaceSideComponent";
import FavoriteSideComponent from "./FavoriteSideComponent";

const SidebarComponent = ({ workspace }) => {
  return (
    <div className="w-[400px] h-screen ">
      <div className="my-15">
        <Logo />
      </div>
      <div className="flex flex-col gap-10">
        <WorkspaceSideComponent workspace={workspace} />
        <FavoriteSideComponent workspace={workspace} />
        <LogoutComponent />
      </div>
    </div>
  );
};

export default SidebarComponent;
