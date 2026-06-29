import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Tooltip,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import satIconPng from "../assets/sat.png";
import "leaflet/dist/leaflet.css";

const issIcon = L.icon({
  iconUrl: satIconPng,
  iconSize: [56, 56],
  iconAnchor: [28, 28],
  popupAnchor: [0, -30],
  className: "iss-satellite-icon",
});

function Recenter({ lat, lon }) {
  const map = useMap();

  useEffect(() => {
    if (lat != null && lon != null) {
      const edgeOffset = 28;
      const safeLon = Math.min(
        Math.max(lon, -180 + edgeOffset),
        180 - edgeOffset,
      );
      map.setView([lat, safeLon], map.getZoom(), { animate: true });
    }
  }, [lat, lon, map]);

  return null;
}

export default function Map() {
  const [coords, setCoords] = useState(null);

  useEffect(() => {
    let mounted = true;
    let timerId = null;

    const getISS = async () => {
      try {
        const res = await fetch(
          "https://api.wheretheiss.at/v1/satellites/25544",
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        console.log("latitude", data.latitude);
        console.log("longitude", data.longitude);
        if (mounted) setCoords({ lat: data.latitude, lon: data.longitude });
      } catch (err) {
        console.error("Failed fetching ISS position:", err);
      }
    };

    // initial fetch then poll every 2 seconds
    getISS();
    timerId = setInterval(getISS, 5000);

    return () => {
      mounted = false;
      if (timerId) clearInterval(timerId);
    };
  }, []);

  return (
    <div className="w-full h-full ">
      <MapContainer
        center={[20, 0]}
        zoom={1.5}
        minZoom={1.5}
        maxBounds={[
          [-85, -180],
          [85, 180],
        ]}
        maxBoundsViscosity={0.8}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://carto.com/attributions">CARTO</a> &mdash; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          // use a dark basemap suitable for dark UI
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          noWrap={true}
          maxZoom={8}
        />
        {coords ? (
          <>
            <Recenter lat={coords.lat} lon={coords.lon} />
            <Marker position={[coords.lat, coords.lon]} icon={issIcon}>
              <Tooltip
                direction="top"
                offset={[0, -30]}
                opacity={0.95}
                permanent={false}
                sticky
              >
                <div className="text-xs font-semibold text-black leading-tight">
                  ISS
                  <br />
                  Lat: {coords.lat.toFixed(4)}
                  <br />
                  Lon: {coords.lon.toFixed(4)}
                </div>
              </Tooltip>
            </Marker>
          </>
        ) : null}
      </MapContainer>
    </div>
  );
}
