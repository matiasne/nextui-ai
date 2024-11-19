import { Wifi, Car, Utensils, Snowflake, Star, StarHalf } from "lucide-react";

export default function Amenities({ amenities }: { amenities: Amenity[] }) {
  return (
    <div className="flex flex-wrap gap-4 mb-0">
      {[
        { icon: Wifi, label: "", index: 1 },
        { icon: Car, label: "", index: 2 },
        { icon: Utensils, label: "", index: 3 },
        { icon: Snowflake, label: "", index: 4 },
      ].map(({ icon: Icon, label, index }) => (
        <div key={index} className=" flex items-center text-foreground-600">
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
  );
}
