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
import { useQuery, useMutation } from "@tanstack/react-query";
import { useProperties } from "@/services/properties";

export default function Component() {
  const properties = useProperties();

  const defaultMapContainerStyle = {
    width: "100%",
    height: "50vh",
    borderRadius: "15px 0px 0px 15px",
  };

  const mapContainerStyle = {
    width: "100%",
    height: "500px",
  };

  const { view, setView } = useContext(ViewContext);

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["getProperties"],
    queryFn: () => properties.getAll(6, 1, 10),
  });

  if (isPending) {
    return <p>Loading...</p>;
  }
  console.log(data.data);

  return (
    <>
      {view ? (
        <div className="flex w-full">
          <GoogleMap mapContainerStyle={defaultMapContainerStyle}></GoogleMap>
        </div>
      ) : (
        <div className="flex w-full">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.data.properties?.map((property: any, index: number) => {
              if (index < 2) {
                return (
                  <PropertyCard
                    key={property.id}
                    property={property}
                    status={PropertyStatus.Checking}
                  ></PropertyCard>
                );
              }
            })}
            <Card className="hidden md:block col-span-1 md:col-span-2 w-full light-mode rounded-md">
              <GoogleMap mapContainerStyle={mapContainerStyle}></GoogleMap>
            </Card>

            {data.data.properties?.map((property: any, index: number) => {
              if (index > 1) {
                return (
                  <PropertyCard
                    key={property.id}
                    property={property}
                    status={PropertyStatus.Checking}
                  ></PropertyCard>
                );
              }
            })}
          </div>
        </div>
      )}
    </>
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
