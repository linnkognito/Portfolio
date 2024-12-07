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
    label: 'Lives:',
    value: 'Portland, OR',
    location: 'Portland, Oregon',
    currentCity: true,
  },
  {
    pos: { lat: 60.5, lng: 13.5 },
    label: 'From:',
    value: 'Stockholm, Sweden',
    location: 'Sweden',
    currentCity: false,
  },
];

const geoData = feature(worldData, worldData.objects.land);

function Map() {
  const [isHovered, setIsHovered] = useState(null);

  function animateMarker(city) {
    if (isHovered === city.location || (!isHovered && city.currentCity))
      return true;

    return false;
  }

  function showText(city) {
    console.log(isHovered);
    if (isHovered === city.location || (!isHovered && city.currentCity))
      return true;

    return false;
  }

  return (
    <div className='realtive w-full h-auto bg-steel rounded shadow-subtle'>
      <h3>Location</h3>
      <Wrapper cls='p-4'>
        <BorderCorners padding='p-1'>
          <Content
            padding=''
            cls='m-2 bg-midnight shadow-glow rounded cursor-crosshair'
          >
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
                <>
                  <Marker
                    key={city.label}
                    coordinates={[city.pos.lng, city.pos.lat]}
                    className='p-10'
                    onMouseEnter={() => setIsHovered(city.location)}
                    onMouseLeave={() => setIsHovered(null)}
                  >
                    <span>{city.label}</span>
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
                        r='4'
                        fill='none'
                        stroke='#d9d6e0'
                        strokeWidth='2'
                        className={
                          animateMarker(city)
                            ? 'animate-ping origin-center'
                            : ''
                        }
                      />
                      {/* Inner Static Circle */}
                      <circle cx='12' cy='12' r='4' fill='#d9d6e0' />

                      {showText(city) && (
                        <text
                          dy={17.6}
                          dx={25}
                          fill='#d9d6e0'
                          style={{
                            fontSize: '1.5rem',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                          }}
                          className={
                            showText(city) ? 'animate-scaleFromCenter' : ''
                          }
                        >
                          {city.value}
                        </text>
                      )}
                    </svg>
                  </Marker>
                </>
              ))}
            </ComposableMap>
          </Content>
        </BorderCorners>
      </Wrapper>

      <Wrapper cls='flex flex-col w-full items-center px-4 mb-4 gap-2'>
        {markers.map((city) => (
          <div
            key={city.label}
            className='w-full grid grid-cols-[1fr_auto_1fr] items-center gap-2 text-sm uppercase bg-midnight rounded'
          >
            {/* L a b e l */}
            <h5 className='justify-self-end font-semibold text-shadow-glow text-fluid break-words'>
              [ {city.label} ]
            </h5>
            {/* S e p a r a t o r */}
            <span className='mx-2 text-center font-bold text-shadow-subtle text-ice'>
              ›
            </span>
            {/* V a l u e */}
            <span
              className='text-left break-words text-fluid
            cursor-crosshair hover:text-shadow-shine hover:animate-pulse
            '
              onMouseEnter={() => setIsHovered(city.location)}
              onMouseLeave={() => setIsHovered(null)}
            >
              {city.value}
            </span>
          </div>
        ))}
      </Wrapper>
    </div>
  );
}

export default Map;
