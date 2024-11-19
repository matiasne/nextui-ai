import { Spinner } from "@nextui-org/spinner";

export default function MapLoader({ show }: { show: boolean }) {
  return (
    <div
      className={`absolute flex flex-col justify-center w-full h-[800px] bg-black  z-50 transition-opacity ease-in duration-300 ${show ? "opacity-70" : "opacity-0"} pointer-events-none`}
    >
      <Spinner />
    </div>
  );
}
