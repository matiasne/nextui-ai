import { Calendar } from "lucide-react";

export default function WarningSelectDate() {
  return (
    <div className="flex flex-row bg-neutrals-900 text-primary-foreground text-sm  justify-center  items-center text-center h-full w-full g-5">
      <Calendar className="text-primary"></Calendar>

      <p className="ml-2">Select Dates to check availability and rates</p>
    </div>
  );
}
