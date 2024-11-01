import React from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Wifi, Car, Utensils, Snowflake, Star } from "lucide-react";
import CheckingAvailability from "./footer/Checking";
import PriceFooter from "./footer/PriceFooter";
import SoldOut from "./footer/WarningSelectDate";
import WarningSelectDate from "./footer/WarningSelectDate";
export enum PropertyStatus {
  Checking = "0",
  Prices = "1",
  SoldOut = "2",
  WarningSelectDate = "3",
}

export default function PropertyCard({ status }: { status: PropertyStatus }) {
  return (
    <Card className="max-w-md light-mode justify-end">
      <CardHeader className="p-0">
        <Image
          alt="Mountain lodge exterior view with dramatic sky"
          src="/image.jpg"
          className="object-cover w-full rounded-none"
        />
      </CardHeader>
      <CardBody className="p-0">
        <div className="p-4 bg-background">
          <h3 className="text-2xl font-semibold mb-2">
            Silverado Lodge at Canyons Village
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            Canyons Village | Condominium Resort
          </p>

          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
            <span className="ml-2 text-sm font-medium">4.8 (243 reviews)</span>
          </div>
          <div className="flex flex-wrap gap-4 mb-0">
            {[
              { icon: Wifi, label: "" },
              { icon: Car, label: "" },
              { icon: Utensils, label: "" },
              { icon: Snowflake, label: "" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className=" flex items-center text-foreground-600"
              >
                <Icon className="w-4 h-4 mr-2" />
                <span>{label}</span>
              </div>
            ))}
            {[
              { icon: Wifi, label: "" },
              { icon: Car, label: "" },
              { icon: Utensils, label: "" },
              { icon: Snowflake, label: "" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center  opacity-25">
                <Icon className="w-4 h-4 mr-2" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="h-[56px]">
          {status === PropertyStatus.Checking ? (
            <CheckingAvailability />
          ) : status === PropertyStatus.Prices ? (
            <PriceFooter />
          ) : status === PropertyStatus.SoldOut ? (
            <SoldOut />
          ) : status === PropertyStatus.WarningSelectDate ? (
            <WarningSelectDate />
          ) : null}
        </div>
      </CardBody>
    </Card>
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
