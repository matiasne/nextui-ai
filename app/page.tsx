import React from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { Image } from "@nextui-org/image";
import { Wifi, Car, Utensils, Snowflake, Star } from "lucide-react";
import PropertyCard, {
  PropertyStatus,
} from "@/components/ripe/PropertyCard/PropertyCard";

export default function Component() {
  return (
    <div className="flex gap-4">
      <PropertyCard status={PropertyStatus.Checking}></PropertyCard>
      <PropertyCard status={PropertyStatus.Prices}></PropertyCard>
      <PropertyCard status={PropertyStatus.SoldOut}></PropertyCard>
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
