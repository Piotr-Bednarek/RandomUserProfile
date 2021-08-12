import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import data from "./sample_api_key.json";

const api_key = data.YOUR_API_KEY;

const containerStyle = {
  width: "620px",
  height: "300px",
};

export default function MapComponent(props) {
  const center = { lat: props.lat, lng: props.lng };

  return (
    <LoadScript googleMapsApiKey={api_key}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={4}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}
