import { LatLngExpression, MapOptions } from 'leaflet';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';

import './style.css';

const Map: React.FC<
  {
    center: LatLngExpression;
    zoom: number;
  } & MapOptions
> = ({ ...options }) => {
  const ComponentResize = () => {
    const map = useMap();

    setTimeout(() => {
      map.invalidateSize();
    }, 0);

    return null;
  };

  return (
    <MapContainer
      center={options.center}
      zoom={options.zoom}
      scrollWheelZoom={options.scrollWheelZoom}
    >
      <ComponentResize />
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};

export default Map;
