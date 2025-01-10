import { Marker } from 'react-simple-maps';

function MapMarker({ city, setIsHovered, showMarkerEffect }) {
  return (
    <Marker
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
        {/* Outer ping animation */}
        <circle
          cx='12'
          cy='12'
          r='4'
          fill='none'
          stroke='#d9d6e0'
          strokeWidth='2'
          className={showMarkerEffect(city) ? 'animate-ping origin-center' : ''}
        />
        {/* Inner static circle */}
        <circle cx='12' cy='12' r='4' fill='#d9d6e0' />

        {showMarkerEffect(city) && (
          <text
            dy={17.6}
            dx={25}
            fill='#d9d6e0'
            style={{
              fontSize: '1.5rem',
              textTransform: 'uppercase',
              fontWeight: 'bold',
            }}
            className={showMarkerEffect(city) ? 'animate-scaleFromCenter' : ''}
          >
            {city.value}
          </text>
        )}
      </svg>
    </Marker>
  );
}

export default MapMarker;
