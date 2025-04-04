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

const DeleteLater = () => {
  return (
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
            />
          </div>
          <div className="flex flex-col items-start gap-1 w-full">
            <label htmlFor="tag" className="text-right">
              Tag
            </label>
            <input
              id="tag"
              placeholder="Please select a tag"
              className="col-span-3 w-full border rounded-lg h-10 px-3 border-slate-300"
            />
          </div>
          <div className="flex flex-col items-start gap-1 w-full">
            <label htmlFor="tag" className="text-right">
              End Date
            </label>
            <input
              id="tag"
              placeholder="Please type your task title"
              className="col-span-3 w-full border rounded-lg h-10 px-3 border-slate-300"
            />
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
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteLater;
