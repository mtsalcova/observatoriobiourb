import { useCallback, useEffect, useMemo, useState } from 'react';
import { Content } from './geographicDist.style';
import { SearchGeographicDist } from 'layouts';

import dataMap from './data';

interface Props {
  Map: any;
}

const MapContainer = ({ Map }: Props) => {
  const [filter, setFilter] = useState({
    specie: '',
    state: '',
    city: ''
  });

  const [markers, setMarkers] = useState([]);

  const data: any = useMemo(() => dataMap, []);

  const handleFilter = useCallback((value) => {
    setFilter(value);
  }, []);

  useEffect(() => {
    if (filter.specie) {
      setMarkers(data[filter.specie]);
    }
  }, [filter, data]);

  return (
    <>
      <Content>
        <SearchGeographicDist onHandleSubmit={handleFilter} />
      </Content>
      <Map places={markers} />
    </>
  );
};

export { MapContainer };
