import { MapContainer, TileLayer } from 'react-leaflet';
import { Box } from './map.style';
import { Markers } from './Markers/Markers';

interface Props {
  places: [
    {
      lat: number;
      long: number;
    }
  ];
}

const Map = ({ places }: Props) => {
  return (
    <Box>
      <MapContainer
        center={[-14.235004, -51.92528]}
        zoom={4}
        scrollWheelZoom={false}
        style={{ width: '100%', height: '800px' }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Markers places={places} />
      </MapContainer>
    </Box>
  );
};

export default Map;
