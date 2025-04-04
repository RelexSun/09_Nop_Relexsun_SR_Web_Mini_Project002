"use client";

import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import Link from "next/link";
import { updateWorkspaceAction } from "@/actions/workspaceAction";

const FavoriteSideComponent = ({ workspace }) => {
  const [id, setId] = useState();
  const path = usePathname();
  const { handleSubmit, reset, register } = useForm();

  const onSubmit = async (data) => {
    const res = await updateWorkspaceAction(id, data);
  };

  const handleColor = () => {
    let random = Math.floor(Math.random() * 5);
    switch (random) {
      case 0:
        return "bg-watermelon-red";
      case 1:
        return "bg-royal-blue";
      case 2:
        return "bg-persian-green";
      case 3:
        return "bg-[#B771E5]";
      case 4:
        return "bg-[#402703]";
    }
  };
  return (
    <div className="">
      <div className="flex items-center px-5 justify-between w-full text-slate-400">
        <h2 className="text-2xl font-bold">Favorites</h2>
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
      <div className=" h-64 mt-5 overflow-scroll">
        {workspace.map(
          (item) =>
            item.isFavorite && (
              <div
                key={item.workspaceId}
                className={`hover:bg-slate-100 hover:font-bold w-full flex items-center justify-between px-6 py-2 transition duration-200 ${
                  path === "/workspace/" + item.workspaceId &&
                  "bg-slate-100 font-bold"
                }`}
              >
                <Link
                  href={`/workspace/${item.workspaceId}`}
                  className="flex items-center gap-7 text-xl w-full"
                >
                  <div
                    className={`rounded-full w-2 h-2 ${handleColor()}`}
                  ></div>
                  {item.workspaceName}
                </Link>
                <Dialog>
                  <DialogTrigger>
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
                      className="lucide lucide-ellipsis-icon lucide-ellipsis"
                      onClick={() => setId(item.workspaceId)}
                    >
                      <circle cx="12" cy="12" r="1" />
                      <circle cx="19" cy="12" r="1" />
                      <circle cx="5" cy="12" r="1" />
                    </svg>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Update This Workspace</DialogTitle>
                    </DialogHeader>
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                      <div className="flex flex-col items-center gap-4 py-4">
                        <div className="flex flex-col items-start gap-1 w-full">
                          <label htmlFor="title" className="text-right text-lg">
                            Title
                          </label>
                          <input
                            id="workspaceName"
                            placeholder="Please type your task title"
                            className="col-span-3 w-full border rounded-lg h-10 px-3 border-slate-300"
                            {...register("workspaceName")}
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button
                          type="submit"
                          className=" text-[#4379F2] border border-[#4379F2] transition duration-300 hover:bg-[#4379F2] hover:text-white"
                        >
                          Update
                        </Button>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default FavoriteSideComponent;
