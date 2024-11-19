import React from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import CheckingAvailability from "./footer/Checking";
import PriceFooter from "./footer/PriceFooter";
import SoldOut from "./footer/WarningSelectDate";
import WarningSelectDate from "./footer/WarningSelectDate";
import Amenities from "./amenities/Amenities";
import { Property, PropertyStatus } from "@/services/dtos/property-dto";
import RatingStars from "./rating/RatingStars";

export default function PropertyCard({
  property,
  onClick,
}: {
  property: Property;
  onClick: () => void;
}) {
  return (
    <Card
      onClick={() => {
        onClick();
      }}
      className="max-w-lg light-mode justify-end rounded-md"
    >
      <CardHeader className="p-0">
        <Image
          alt="Mountain lodge exterior view with dramatic sky"
          src={property.images[0].url}
          className="object-cover w-full h-[300px] rounded-none"
        />
      </CardHeader>
      <CardBody className="p-0 justify-between">
        <div className="flex flex-col h-[200px] p-4 bg-background justify-between">
          <h3 className="text-2xl font-semibold mb-2">{property.name}</h3>
          <div className="">
            <p className="text-sm text-gray-500 mb-4">not defined</p>
            <RatingStars ratings={property.rating} />
            <Amenities amenities={property.amenities} />
          </div>
        </div>
        <div className="h-[56px] w-full">
          {property.status === PropertyStatus.Checking ? (
            <CheckingAvailability />
          ) : property.status === PropertyStatus.Prices ? (
            <PriceFooter />
          ) : property.status === PropertyStatus.SoldOut ? (
            <SoldOut />
          ) : property.status === PropertyStatus.WarningSelectDate ? (
            <WarningSelectDate />
          ) : null}
        </div>
      </CardBody>
    </Card>
  );
}
