import CardComponent from "@/components/card";
import React from "react";

const WorkSpaceComponent = ({ payload }) => {
  return (
    <main className="flex justify-between px-10">
      <div className="w-[350px]">
        <div className="text-watermelon-red">
          <p className="text-lg mb-2">Not Started</p>
          <hr />
        </div>
        <div className=" grid grid-cols-1">
          {payload.map(
            (item) =>
              item.status === "NOT_STARTED" && (
                <CardComponent key={item.taskId} task={item} />
              )
          )}
        </div>
      </div>
      <div className="w-[350px]">
        <div className="text-royal-blue">
          <p className="text-lg mb-2">In Progress</p>
          <hr />
        </div>
        <div className="grid grid-cols-1">
          {payload.map(
            (item) =>
              item.status === "IN_PROGRESS" && (
                <CardComponent key={item.taskId} task={item} />
              )
          )}
        </div>
      </div>
      <div className="w-[350px]">
        <div className="text-persian-green">
          <p className="text-lg mb-2">Finished</p>
          <hr />
        </div>
        <div className="grid grid-cols-1">
          {payload.map(
            (item) =>
              item.status === "FINISHED" && (
                <CardComponent key={item.taskId} task={item} />
              )
          )}
        </div>
      </div>
    </main>
  );
};

export default WorkSpaceComponent;

{
  /*DESIGN, HOMEWORK, ASSIGNMENT, DEPLOYMENT,
GIT, DATABASE, MINI_PROJECT, DOCUMENTATION, FEATURE. */
}
