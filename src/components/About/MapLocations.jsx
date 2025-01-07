import Wrapper from '../Containers/Wrapper';

function MapLocations({ markers, setIsHovered }) {
  return (
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
  );
}

export default MapLocations;
