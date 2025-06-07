import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const LocationMarker = ({ setFormData }) => {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setFormData((prev) => ({
        ...prev,
        locationCoordinates: {
          lat,
          long: lng,
        },
      }));
    },
  });

  return null;
};

const MapLocationPicker = ({ formData, setFormData }) => {
  const { lat, long } = formData.locationCoordinates;

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Choose Location on Map
      </label>
      <MapContainer
        center={[lat, long]}
        zoom={8}
        scrollWheelZoom={false}
        style={{ height: "500px", width: "100%", borderRadius: "0.5rem" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker setFormData={setFormData} />
        {lat && long && <Marker position={[lat, long]} />}
      </MapContainer>

      <div className="text-sm text-gray-600">
        <strong>Lat:</strong> {lat || "—"} | <strong>Lng:</strong> {long || "—"}
      </div>
    </div>
  );
};

export default MapLocationPicker;
