import { useState } from 'react';
import markers from '../../../data/mapMarkers.json';
import Wrapper from '../Containers/Wrapper';
import MapLocations from './MapLocations';
import Map from './Map';

function Location() {
  const [isHovered, setIsHovered] = useState(null);

  const styles = {
    wrapper: 'realtive w-full h-auto bg-steel rounded shadow-subtle',
  };

  return (
    <Wrapper cls={styles.wrapper}>
      <h3>Location</h3>
      <Map
        markers={markers}
        isHovered={isHovered}
        setIsHovered={setIsHovered}
      />
      <MapLocations markers={markers} setIsHovered={setIsHovered} />
    </Wrapper>
  );
}

export default Location;
