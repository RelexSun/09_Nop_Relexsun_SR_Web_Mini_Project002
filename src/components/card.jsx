import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Clock, Ellipsis } from "lucide-react";
import React from "react";

export default function CardComponent({ task }) {
  const handleStatusColor = (status) => {
    switch (status) {
      case "NOT_STARTED":
        return "bg-watermelon-red";
      case "IN_PROGRESS":
        return "bg-royal-blue";
      case "FINISHED":
        return "bg-persian-green";
    }
  };
  const handleStatusColorBorder = (status) => {
    switch (status) {
      case "NOT_STARTED":
        return "border-watermelon-red";
      case "IN_PROGRESS":
        return "border-royal-blue";
      case "FINISHED":
        return "border-persian-green";
    }
  };

  const handleStatusColorText = (status) => {
    switch (status) {
      case "NOT_STARTED":
        return "text-watermelon-red";
      case "IN_PROGRESS":
        return "text-royal-blue";
      case "FINISHED":
        return "text-persian-green";
    }
  };
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <div className="border border-gray-300 rounded-xl mt-8 h-[270px]">
      <div className="p-5">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold capitalize">{task.taskTitle}</h2>
          <Ellipsis />
        </div>

        {/* task detials */}
        <p className="line-clamp-2 text-light-steel-blue my-2 h-12">
          {task.taskDetails}
        </p>

        <div className="flex justify-between items-center mt-4">
          {/* tag */}
          <p className="bg-purple-100 text-purple-500 py-1.5 px-3 rounded-lg">
            {task.tag}
          </p>

          {/* status */}
          <div
            className={`rounded-full w-8 h-8 ${handleStatusColor(task.status)}`}
          ></div>
        </div>
      </div>

      {/* progress */}
      <div className="flex justify-between items-center border-t border-t-gray-300 p-5">
        <Select>
          <SelectTrigger
            className={`w-40 truncate ${handleStatusColorBorder(
              task.status
            )} ${handleStatusColorText(task.status)}`}
          >
            <SelectValue placeholder={task.status} />
          </SelectTrigger>
          <SelectContent className={"bg-white"}>
            <SelectItem value="NOT_STARTED">NOT_STARTED</SelectItem>
            <SelectItem value="IN_PROGRESS">IN_PROGRESS</SelectItem>
            <SelectItem value="FINISHED">FINISHED</SelectItem>
          </SelectContent>
        </Select>

        {/* date */}
        <p className="flex gap-3 text-light-steel-blue">
          <Clock size={22} />
          {month[new Date(task.endDate).getMonth() - 1]}{" "}
          {new Date(task.endDate).getDay()}
          {", "}
          {new Date(task.endDate).getFullYear()}
        </p>
      </div>
    </div>
  );
}
