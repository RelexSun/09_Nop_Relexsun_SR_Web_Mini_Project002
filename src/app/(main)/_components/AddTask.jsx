"use client";

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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useForm } from "react-hook-form";

const AddTask = () => {
  const [date, setDate] = React.useState();
  const { handleSubmit, register, reset } = useForm();
  const onSubmit = async () => {};
  return (
    <Dialog>
      <DialogTrigger>
        <div className="bg-royal-blue rounded-full flex gap-3 items-center py-2 px-3 text-white">
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
          New Task
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Task</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center gap-4 py-4">
          <div className="flex flex-col items-start gap-1 w-full">
            <label htmlFor="title" className="text-right">
              Title
            </label>
            <input
              id="title"
              placeholder="Please type your task title"
              className="col-span-3 w-full border rounded-lg h-10 px-3 border-slate-300"
              {...register("title")}
            />
          </div>
          <div className="flex flex-col items-start gap-1 w-full">
            <label htmlFor="tag" className="text-right">
              Tag
            </label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a Tag" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="DESIGN">DESIGN</SelectItem>
                  <SelectItem value="HOMEWORK">HOMEWORK</SelectItem>
                  <SelectItem value="ASSIGNMENT">ASSIGNMENT</SelectItem>
                  <SelectItem value="DEPLOYMENT">DEPLOYMENT</SelectItem>
                  <SelectItem value="GIT">GIT</SelectItem>
                  <SelectItem value="DATABASE">DATABASE</SelectItem>
                  <SelectItem value="MINI_PROJECT">MINI_PROJECT</SelectItem>
                  <SelectItem value="DOCUMENTATION">DOCUMENTATION</SelectItem>
                  <SelectItem value="FEATURE">FEATURE</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col items-start gap-1 w-full">
            <label htmlFor="tag" className="text-right">
              End Date
            </label>
            <Popover>
              <PopoverTrigger asChild className="border-slate-200">
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-auto p-0 border-slate-200"
                align="start"
              >
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex flex-col items-start gap-1  w-full">
            <label htmlFor="tag" className="text-right">
              Details
            </label>
            <input
              id="tag"
              placeholder="Provide some details about your task (optional)"
              className="col-span-3 w-full border rounded-lg h-10 px-3 border-slate-300"
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
      </DialogContent>
    </Dialog>
  );
};

export default AddTask;

{
  /**
 , , ,
, , , , . */
}
