import { InfoWindow, Marker } from "@react-google-maps/api";
import React from "react";

export default function POIMarker({
  pin,
  onClick,
}: {
  pin: PinDTO;
  onClick: (pin: PinDTO) => void;
}) {
  const center = {
    lat: Number(pin.latitude),
    lng: Number(pin.longitude),
  };

  const customIcon = {
    url: pin.image,
    scaledSize: new window.google.maps.Size(35, 35),
  };

  return (
    <>
      <Marker
        position={center}
        icon={customIcon}
        onClick={() => {
          onClick(pin);
        }}
      />
    </>
  );
}
