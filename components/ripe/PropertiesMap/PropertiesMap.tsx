import { usePublisher } from "@/app/providers/PublisherProvider";
import { usePinsService } from "@/services/pins.service";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { useQuery } from "@tanstack/react-query";
import { use, useCallback, useEffect, useRef, useState } from "react";
import MapLoader from "./MapLoader";
import POIMarker from "./PointOfInterest/POIMarker";
import POIInfoWindow from "./PointOfInterest/POIInfoWindow";
import { usePropertiesService } from "@/services/properties.service";
import PropertyMarker from "./Properties/PropertyMarker";
import { PropertyDTO } from "@/services/dtos/property-dto";

export default function PropertiesMap({ markers }: { markers: any }) {
  const debounceMs = 1000;
  const mapRef = useRef(null);
  const { config } = usePublisher();
  const [bounds, setBounds] = useState(null);
  const [fetchedBounds, setFetchedBounds] = useState(null);
  const [center, setCenter] = useState({
    lat: Number(config?.publisher.map_latitude),
    lng: Number(config?.publisher.map_longitude),
  });
  const [pins, setPins] = useState<any[]>([]);
  const [properties, setProperties] = useState<any[]>([]);
  const [selectedPOIPin, setSelectedPOIPin] = useState<any>(null);

  const pinService = usePinsService();
  const propertiesService = usePropertiesService();

  // Store map instance on load
  const onMapLoad = (map: any) => {
    mapRef.current = map; // Save map instance to ref
  };

  const defaultMapContainerStyle = {
    width: "100%",
    height: "800px",
  };

  // Define custom map options
  const mapOptions = {
    styles: [
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },
    ],
    disableDefaultUI: true, // Disable default map UI elements
    zoomControl: true, // Enable zoom control
  };

  const checkBoundsEquals = (newBounds: any) => {
    if (!fetchedBounds) {
      console.log("not fetched bounds yet");
      return true;
    }

    return (
      bounds.getSouthWest().lat() === newBounds.getSouthWest().lat() &&
      bounds.getSouthWest().lng() === newBounds.getSouthWest().lng() &&
      bounds.getNorthEast().lat() === newBounds.getNorthEast().lat() &&
      bounds.getNorthEast().lng() === newBounds.getNorthEast().lng()
    );
  };

  const isOutsideTheBounds = (newBounds: any): boolean => {
    if (!fetchedBounds) {
      console.log("isNotInsideBounds");
      return true;
    }

    const minLat = fetchedBounds.getSouthWest().lat();
    const minLng = fetchedBounds.getSouthWest().lng();
    const maxLat = fetchedBounds.getNorthEast().lat();
    const maxLng = fetchedBounds.getNorthEast().lng();

    const newBoundsMinLat = newBounds.getSouthWest().lat();
    const newBoundsMinLon = newBounds.getSouthWest().lng();
    const newBoundsMaxLat = newBounds.getNorthEast().lat();
    const newBoundsMaxLon = newBounds.getNorthEast().lng();

    const isOutside =
      newBoundsMinLat < minLat ||
      newBoundsMinLon < minLng ||
      newBoundsMaxLat > maxLat ||
      newBoundsMaxLon > maxLng;

    return isOutside;
  };

  const handleBoundsChanged = () => {
    let timeout: any;

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      const newBounds = mapRef.current.getBounds();
      if (!bounds || !checkBoundsEquals(newBounds)) {
        setBounds(newBounds);
        if (!isOutsideTheBounds(bounds)) {
          console.log("is inside the bounds already");
          return pins;
        } else {
          console.log("not inside the bounds already");
          setFetchedBounds(newBounds);
        }
      }
    }, debounceMs);
  };

  const handleCenterChanged = () => {
    const newCenter = mapRef.current.getCenter();

    if (!bounds) {
      let timeout: any;

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setCenter({
          lat: newCenter.lat(),
          lng: newCenter.lng(),
        });
      }, debounceMs);
    }
  };

  useEffect(() => {
    setCenter({
      lat: Number(config?.publisher.map_latitude),
      lng: Number(config?.publisher.map_longitude),
    });
  }, [config]);

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["getPinsByBound", fetchedBounds],
    queryFn: async ({ signal }) => {
      console.log("fetching");
      const minLat = bounds.getSouthWest().lat();
      const minLng = bounds.getSouthWest().lng();
      const maxLat = bounds.getNorthEast().lat();
      const maxLng = bounds.getNorthEast().lng();

      const data = await pinService.getByZone(
        6,
        minLat,
        maxLat,
        minLng,
        maxLng,
        signal
      );

      const newPins: PinDTO[] = data.filter((pin: any) => {
        return !pins.some((oldPin: any) => oldPin.id === pin.id);
      });

      setPins((prev) => [...prev, ...newPins]);

      const propertiesData = await propertiesService.getByZone(
        6,
        minLat,
        maxLat,
        minLng,
        maxLng,
        signal
      );

      const newProperties: PropertyDTO[] = propertiesData.properties.filter(
        (property: any) => {
          return !properties.some(
            (oldProperty: any) => oldProperty.id === property.id
          );
        }
      );

      console.log(newProperties);

      setProperties((prev) => [...prev, ...newProperties]);

      return data;
    },
  });

  return (
    <>
      <MapLoader show={isPending && !selectedPOIPin} />
      <GoogleMap
        mapContainerStyle={defaultMapContainerStyle}
        zoom={config?.publisher.map_zoom}
        onCenterChanged={handleCenterChanged}
        center={center}
        options={mapOptions}
        onBoundsChanged={handleBoundsChanged}
        onLoad={onMapLoad} // Set map instance
      >
        {pins
          ? pins.map((marker: any, index) => (
              <POIMarker
                key={index}
                pin={marker}
                onClick={(pin) => {
                  setSelectedPOIPin(pin);
                }}
              />
            ))
          : null}

        {properties.map((property: any, index) => (
          <PropertyMarker
            property={property}
            onClick={function (property: PropertyDTO): void {
              console.log("clicked property", property);
            }}
          />
        ))}
        <POIInfoWindow
          pin={selectedPOIPin}
          onClose={function (): void {
            setSelectedPOIPin(null);
          }}
        />
      </GoogleMap>
    </>
  );
}
