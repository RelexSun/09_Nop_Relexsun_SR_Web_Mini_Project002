"use client";

import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  createWorkspaceAction,
  updateWorkspaceAction,
} from "@/actions/workspaceAction";
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
import { toast } from "sonner";

const WorkspaceSideComponent = ({ workspace }) => {
  const [id, setId] = useState();
  const path = usePathname();
  const { handleSubmit, reset, register } = useForm();
  const onSubmit = async (data) => {
    const res = await createWorkspaceAction(data);

    if (res?.status === "CREATED") {
      toast("Workspace Created successfully");
    }
  };
  const onSubmitUpdate = async (data) => {
    const res = await updateWorkspaceAction(id, data);
    if (res?.status === "OK") toast("Update successfully!!!");
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
    <div>
      <div className="flex items-center px-5 justify-between w-full text-slate-400">
        <h2 className="text-2xl font-bold ">Workspace</h2>
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
              className="lucide lucide-circle-plus-icon lucide-circle-plus"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12h8" />
              <path d="M12 8v8" />
            </svg>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Create New Workspace</DialogTitle>
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
                  Create
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div className=" h-64 mt-5 overflow-scroll">
        {workspace.map((item) => (
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
              <div className={`rounded-full w-2 h-2 ${handleColor()}`}></div>
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
                <form action="" onSubmit={handleSubmit(onSubmitUpdate)}>
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
        ))}
      </div>
    </div>
  );
};

export default WorkspaceSideComponent;
