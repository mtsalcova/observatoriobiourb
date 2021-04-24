import { useEffect } from 'react';
import { useMap, CircleMarker } from 'react-leaflet';

interface Props {
  places: [
    {
      lat: number;
      long: number;
    }
  ];
}

const Markers = ({ places }: Props) => {
  const map = useMap();
  useEffect(() => {
    if (places[0]?.lat) {
      map.setView([places[0].lat, places[0].long], 13);
    }
  }, [map, places]);

  return (
    <>
      {places?.map(({ lat, long }) => {
        return <CircleMarker key={lat} radius={50} center={[lat, long]} />;
      })}
    </>
  );
};

export { Markers };
