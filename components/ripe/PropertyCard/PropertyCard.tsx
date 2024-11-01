import React from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Wifi, Car, Utensils, Snowflake, Star, StarHalf } from "lucide-react";
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

export default function PropertyCard({
  status,
  property,
}: {
  status: PropertyStatus;
  property: Property;
}) {
  function getAverageRating(): number {
    const ratingSum: Rating = property.rating.reduce(
      (acc, curr) => acc + curr.stars,
      0
    );

    return (Number(ratingSum) / property.rating.length).toFixed(1);
  }

  return (
    <Card className="max-w-lg light-mode justify-end rounded-md">
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

            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => {
                if (i + 1 < Number(getAverageRating())) {
                  return (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  );
                }

                if (
                  i < Number(getAverageRating()) &&
                  Number(getAverageRating()) % 1 == 0
                ) {
                  return (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  );
                }

                if (
                  i === Math.floor(Number(getAverageRating())) &&
                  Number(getAverageRating()) % 1 !== 0
                ) {
                  return (
                    <div className="w-5 h-5 relative">
                      <StarHalf
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current absolute z-50"
                      />
                      <Star
                        key={i}
                        className="w-5 h-5 text-gray-200 fill-current absolute"
                      />
                    </div>
                  );
                } else {
                  return (
                    <Star
                      key={i}
                      className="w-5 h-5 text-gray-200 fill-current"
                    />
                  );
                }
              })}
              <span className="ml-2 text-sm  font-light opacity-45">
                {getAverageRating()} | {property.rating.length} reviews
              </span>
            </div>
            <div className="flex flex-wrap gap-4 mb-0">
              {[
                { icon: Wifi, label: "", index: 1 },
                { icon: Car, label: "", index: 2 },
                { icon: Utensils, label: "", index: 3 },
                { icon: Snowflake, label: "", index: 4 },
              ].map(({ icon: Icon, label, index }) => (
                <div
                  key={index}
                  className=" flex items-center text-foreground-600"
                >
                  <Icon className="w-4 h-4 mr-2" />
                  <span>{label}</span>
                </div>
              ))}
              {[
                { icon: Wifi, label: "", index: 1 },
                { icon: Car, label: "", index: 2 },
                { icon: Utensils, label: "", index: 3 },
                { icon: Snowflake, label: "", index: 4 },
              ].map(({ icon: Icon, label, index }) => (
                <div key={index} className="flex items-center  opacity-25">
                  <Icon className="w-4 h-4 mr-2" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="h-[56px] w-full">
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
