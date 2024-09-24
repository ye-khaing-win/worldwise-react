import { useNavigate } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useEffect, useState } from "react";
import {
  LatLngExpression,
  LeafletMouseEvent,
} from "leaflet";
import { useCities } from "../hooks/useCities";
import Button from "./Button";
import { useGeolocation } from "../hooks/useGeolocation";
import { useUrlPosition } from "../hooks/useUrlPosition";

const Map = () => {
  const [position, setPosition] =
    useState<LatLngExpression>([40, 0]);
  const { cities } = useCities();

  const {
    position: geoPosition,
    getPosition: getGeoPosition,
    isLoading: isGeoLoading,
  } = useGeolocation();

  const [lat, lng] = useUrlPosition();

  useEffect(() => {
    if (lat && lng) setPosition([Number(lat), Number(lng)]);
  }, [lat, lng]);

  useEffect(() => {
    if (geoPosition) {
      const { lat, lng } = geoPosition;
      setPosition([lat, lng]);
    }
  }, [geoPosition]);

  return (
    <div className="flex-1 h-full bg-dark-2 relative">
      {!geoPosition && (
        <Button type="position" onClick={getGeoPosition}>
          {isGeoLoading
            ? "Loading..."
            : "Use your position"}
        </Button>
      )}
      <MapContainer
        center={position}
        zoom={6}
        scrollWheelZoom={true}
        className="h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            key={city.id}
            position={[
              city.position.lat,
              city.position.lng,
            ]}
          >
            <Popup>
              <span className="mr-4 text-3xl">
                {city.emoji}
              </span>
              <span className="text-2xl">
                {city.cityName}
              </span>
            </Popup>
          </Marker>
        ))}

        <ChangeCenter position={position} />
        <DetectClick />
      </MapContainer>
    </div>
  );
};

interface ChangeCenterProps {
  position: LatLngExpression;
}

const ChangeCenter = ({ position }: ChangeCenterProps) => {
  const map = useMap();

  map.setView(position);

  return null;
};

const DetectClick = () => {
  const navigate = useNavigate();
  useMapEvents({
    click: (e: LeafletMouseEvent) => {
      navigate(
        `form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`
      );
    },
  });

  return null;
};

export default Map;
