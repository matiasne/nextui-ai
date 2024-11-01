"use client";

import React, { useContext } from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { Image } from "@nextui-org/image";
import { Wifi, Car, Utensils, Snowflake, Star } from "lucide-react";
import PropertyCard, {
  PropertyStatus,
} from "@/components/ripe/PropertyCard/PropertyCard";
import { ViewContext } from "@/components/ripe/ViewBar/ViewProvider";
import { GoogleMap, Libraries, useJsApiLoader } from "@react-google-maps/api";

export const defaultMapContainerStyle = {
  width: "100%",
  height: "50vh",
  borderRadius: "15px 0px 0px 15px",
};

export const mapContainerStyle = {
  width: "100%",
  height: "500px",
  borderRadius: "15px 0px 0px 15px",
};

export default function Component() {
  const { view, setView } = useContext(ViewContext);

  return (
    <div className="flex gap-4">
      <>
        {view ? (
          <div className="w-full">
            <GoogleMap mapContainerStyle={defaultMapContainerStyle}></GoogleMap>
          </div>
        ) : (
          <div className="flex w-full">
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <PropertyCard status={PropertyStatus.Checking}></PropertyCard>
              <PropertyCard status={PropertyStatus.Prices}></PropertyCard>
              <Card className="hidden md:block col-span-1 md:col-span-2 w-full light-mode">
                <GoogleMap mapContainerStyle={mapContainerStyle}></GoogleMap>
              </Card>
              <PropertyCard status={PropertyStatus.SoldOut}></PropertyCard>
            </div>
          </div>
        )}
      </>
    </div>
  );
}

// Add the following CSS styles for light mode
// .light-mode {
//   background-color: white; // Set background color for light mode
//   color: black; // Set text color for light mode
// }
// .light-mode .bg-red-500 {
//   background-color: #f56565; // Adjust background color for price section
// }
