import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { feature } from 'topojson-client';
import worldData from 'world-atlas/land-50m.json';

import Wrapper from '../Containers/Wrapper';
import Content from '../Containers/Content';
import BorderCorners from '../Common/BorderCorners';
import MapMarker from './MapMarker';

function Map({ markers, isHovered, setIsHovered }) {
  const geoData = feature(worldData, worldData.objects.land);

  function showMarkerEffect(city) {
    if (isHovered === city.location || (!isHovered && city.currentCity))
      return true;

    return false;
  }

  const styles = {
    content: 'm-2 bg-midnight shadow-glow rounded cursor-crosshair',
  };

  return (
    <Wrapper cls='p-4'>
      <BorderCorners padding='p-1'>
        <Content padding='' cls={styles.content}>
          <ComposableMap projection='geoMercator'>
            <Geographies geography={geoData}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill='rgba(180, 199, 219, 0.6)'
                  />
                ))
              }
            </Geographies>

            {/* Marker */}
            {markers.map((city) => (
              <MapMarker
                key={city.label}
                city={city}
                setIsHovered={setIsHovered}
                showMarkerEffect={showMarkerEffect}
              />
            ))}
          </ComposableMap>
        </Content>
      </BorderCorners>
    </Wrapper>
  );
}

export default Map;
