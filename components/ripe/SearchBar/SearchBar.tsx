"use client";
import { Input } from "@nextui-org/input";
import { Kbd } from "@nextui-org/kbd";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Calendar, SearchIcon, UsersRound } from "lucide-react";
import CheckInOutDatePicker from "./CheckInOutDatePicker";
import GuestSelection from "./RoomPickerModal";
import { useViewContext } from "../ViewBar/ViewProvider";

export const SearchBar = () => {
  const searchInput = (
    <div className="flex flex-col ">
      <Input
        aria-label="Search"
        classNames={{
          inputWrapper: "bg-default-50",
          input: "text-sm",
        }}
        labelPlacement="outside"
        placeholder="Describe your desired stay"
        startContent={
          <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
        }
        type="search"
      />
      <span className="text-[10px] opacity-45">
        I.E. Hotel that is under $150/night and includes breakfast"
      </span>
    </div>
  );

  return (
    <>
      <NextUINavbar
        maxWidth="full"
        position="sticky"
        className="bg-foreground bg-opacity-10 justify-center h-[109px]"
      >
        <NavbarContent className="flex flex-row w-full g-4 " justify="center">
          <div className="text-md font-light text-2xl">Book your stay</div>
          <NavbarItem className="hidden lg:flex">
            <CheckInOutDatePicker />
          </NavbarItem>
          <NavbarItem className="hidden lg:flex">
            <GuestSelection />
          </NavbarItem>
          <NavbarItem className="hidden lg:flex mt-2  border-neutral-400 border-opacity-25 border-l-1 pl-4">
            {searchInput}
          </NavbarItem>
        </NavbarContent>
      </NextUINavbar>
    </>
  );
};
