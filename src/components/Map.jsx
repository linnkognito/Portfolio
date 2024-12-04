import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';
import { feature } from 'topojson-client';
import worldData from 'world-atlas/land-50m.json';
import Content from './Content';
import BorderCorners from './BorderCorners';
import Wrapper from './Wrapper';
import { useState } from 'react';

const markers = [
  {
    pos: { lat: 45.5051, lng: -122.675 },
    label: 'Lives: Portland, OR',
    location: 'Portland, Oregon',
  },
  // {
  //   pos: { lat: 58.41015733530784, lng: 15.622441182934327 },
  //   label: 'Born: Sweden',
  //   location: 'Linköping, Sweden',
  // },
  {
    pos: { lat: 60.5, lng: 13.5 },
    label: 'Born: Sweden',
    location: 'Sweden',
  },
];

const geoData = feature(worldData, worldData.objects.land);

function Map() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className='w-full h-auto bg-steel rounded shadow-subtle'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3>Location</h3>
      <Wrapper cls='p-4'>
        <BorderCorners padding='p-1'>
          <Content padding='' cls='m-2 bg-midnight shadow-glow rounded'>
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
              {markers.map((m) => (
                <Marker key={m.label} coordinates={[m.pos.lng, m.pos.lat]}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='overflow-visible'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                  >
                    {/* Outer Ping Animation */}
                    <circle
                      cx='12'
                      cy='12'
                      r='7'
                      fill='none'
                      stroke='#d9d6e0'
                      strokeWidth='2'
                      className={`${
                        isHovered ? 'animate-ping origin-center' : ''
                      }`}
                    />
                    {/* Inner Static Circle */}
                    <circle cx='12' cy='12' r='7' fill='#d9d6e0' />
                  </svg>
                </Marker>
              ))}
            </ComposableMap>
          </Content>
        </BorderCorners>
      </Wrapper>
    </div>
  );
}

export default Map;
