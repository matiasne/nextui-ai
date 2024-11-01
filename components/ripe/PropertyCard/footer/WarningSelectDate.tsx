import { Calendar } from "lucide-react";

export default function WarningSelectDate() {
  return (
    <div className="flex flex-row bg-neutrals-900 text-primary-foreground text-sm  justify-center  items-center text-center h-full w-full g-5">
      <Calendar className="text-primary w-[50px]"></Calendar>

      <p className=" text-left">Select Dates to check availability and rates</p>
    </div>
  );
}
