import { PropertyDTO } from "@/services/dtos/property-dto";
import { InfoWindow, Marker } from "@react-google-maps/api";
import React from "react";

export default function PropertyMarker({
  property,
  onClick,
}: {
  property: PropertyDTO;
  onClick: (property: PropertyDTO) => void;
}) {
  const center = {
    lat: Number(property.addresses[0].geolocation.latitude),
    lng: Number(property.addresses[0].geolocation.longitude),
  };

  // const customIcon = {
  //   url: property.image,
  //   scaledSize: new window.google.maps.Size(35, 35),
  // };

  return (
    <>
      <Marker
        position={center}
        onClick={() => {
          onClick(property);
        }}
      />
    </>
  );
}
