import Map from './Map';
// import MapMarker from './MapMarker';
import Stats from './Stats';

function Info() {
  return (
    <div className='flex flex-col gap-4 items-center w-1/2 min-w-1/2 max-w-1/2 h-full p-4 rounded shadow-subtle-sm bg-steel bg-noise'>
      <Stats />
      <Map />
    </div>
  );
}

export default Info;
