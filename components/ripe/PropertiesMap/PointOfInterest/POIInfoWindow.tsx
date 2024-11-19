import { InfoWindow } from "@react-google-maps/api";

export default function POIInfoWindow({
  pin,
  onClose,
}: {
  pin: PinDTO;
  onClose: () => void;
}) {
  return (
    <>
      {pin && (
        <InfoWindow
          position={{
            lat: Number(pin.latitude) + 0.0001,
            lng: Number(pin.longitude),
          }}
          onCloseClick={() => {
            onClose();
          }}
        >
          <div className="w-[350px]">
            <img
              src={pin.photo}
              alt={pin.name}
              style={{
                width: "350px",
                maxWidth: "350px",
                height: "auto",
                marginBottom: "10px",
              }}
            />
            <div className="p-3">
              <h1 className="text-secondary text-lg font-bold">{pin.name}</h1>
              <p>{pin.description}</p>
            </div>
          </div>
        </InfoWindow>
      )}
    </>
  );
}
