import React from "react";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import { Button } from "./ui/button";

const TopNavComponent = ({ workspace, user }) => {
  const { userId, username, email, profile } = user;
  const handleClick = async () => {};
  return (
    <div className=" py-5">
      <div className="flex justify-between items-center px-15">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink className="text-2xl" href="#">
                Workspace
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink
                className="text-2xl text-[#4379F2] hover:underline"
                href={`/workspace/${workspace.workspaceId}`}
              >
                {workspace.workspaceName}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="flex items-center gap-5">
          <div className=" overflow-hidden rounded-4xl w-12 h-12">
            <Image src={profile} width={100} height={100} alt="image" />
          </div>
          <div className="">
            <p className="text-base font-medium">{username}</p>
            <p className="text-sm text-[#00aba0]">{email}</p>
          </div>
        </div>
      </div>
      <div className="my-4">
        <hr className=" opacity-10" />
      </div>
      <div className="px-15 py-3 flex items-center justify-between">
        <div className="text-3xl font-bold ">{workspace.workspaceName}</div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-star-icon lucide-star"
        >
          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
        </svg>
      </div>
    </div>
  );
};

export default TopNavComponent;
