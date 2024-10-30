import React from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { Image } from "@nextui-org/image";
import { Wifi, Car, Utensils, Snowflake, Star } from "lucide-react";

export default function Component() {
  return (
    <Card className="max-w-md">
      <CardHeader className="p-0">
        <Image
          alt="Mountain lodge exterior view with dramatic sky"
          src="/placeholder.svg?height=450&width=800"
          className="object-cover w-full h-48"
        />
      </CardHeader>
      <CardBody className="p-5">
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
        <div className="flex flex-wrap gap-4 mb-6">
          {[
            { icon: Wifi, label: "WiFi" },
            { icon: Car, label: "Parking" },
            { icon: Utensils, label: "Dining" },
            { icon: Snowflake, label: "Ski Access" },
          ].map(({ icon: Icon, label }) => (
            <Chip key={label} variant="flat" className="bg-gray-100">
              <Icon className="w-4 h-4 mr-2" />
              {label}
            </Chip>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">$150</div>
          <div className="text-sm text-gray-500">per night</div>
        </div>
      </CardBody>
    </Card>
  );
}
