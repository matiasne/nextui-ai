"use client";
import SkiyingIcon from "@/components/icons/skiying";
import WalkLiftIcon from "@/components/icons/walkLiftIcon";
import WalkToMainStreetIcon from "@/components/icons/walkToMainStreetIcon";
import { Button } from "@nextui-org/button";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";

import {
  MapPin,
  Map,
  Rows3,
  ArrowDownUp,
  SlidersHorizontal,
} from "lucide-react"; // Importing icons from lucide-react
import { useState } from "react";

export const ViewBar = () => {
  const [showMap, setShowMap] = useState(false);
  return (
    <>
      <NextUINavbar
        maxWidth="xl"
        position="sticky"
        className="bg-background bg-opacity-80 w-full justify-center h-[65px]  shadow-md overflow-hidden"
      >
        <NavbarContent justify="start">
          <Button
            fullWidth
            className="m-1 w-2"
            variant="light"
            aria-label="list"
            isIconOnly
            onPress={() => setShowMap(false)}
          >
            <Rows3 className={showMap ? "" : "text-primary"} />
          </Button>
          <Button
            variant="light"
            aria-label="map"
            isIconOnly
            onPress={() => setShowMap(true)}
          >
            <Map className={showMap ? "text-primary" : ""} />
          </Button>
        </NavbarContent>
        <NavbarContent className="  g-4 " justify="center">
          <NavbarItem className="hidden lg:flex">
            <div className="flex items-center justify-between p-4 ">
              <div className="flex space-x-4">
                <Button
                  variant="light"
                  aria-label="Ski-in / Ski-out"
                  className="flex flex-col items-center g-1 h-20"
                >
                  <SkiyingIcon />
                  <span className="text-xs opacity-60 font-extralight">
                    Ski-in / Ski-out
                  </span>
                </Button>
                <Button
                  variant="light"
                  aria-label="Walk to lifts"
                  className="flex flex-col items-center g-1 h-20"
                >
                  <WalkLiftIcon />
                  <span className="text-xs opacity-60 font-extralight">
                    Walk to lifts
                  </span>
                </Button>
                <Button
                  variant="light"
                  aria-label="Walk to main street"
                  className="flex flex-col items-center g-1 h-20"
                >
                  <WalkToMainStreetIcon />
                  <span className="text-xs opacity-60 font-extralight">
                    Walk to main street
                  </span>
                </Button>
              </div>
            </div>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent className="" justify="end">
          <Button
            variant="light"
            endContent={<ArrowDownUp className="text-primary" />}
            aria-label="Sort By"
          >
            Sort By
          </Button>
          <Button
            isIconOnly
            variant="light"
            aria-label="Sort By"
            className="bg-primary text-white"
          >
            <SlidersHorizontal />
          </Button>
        </NavbarContent>
      </NextUINavbar>
    </>
  );
};
