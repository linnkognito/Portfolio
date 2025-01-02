import Map from './Map';
import Stats from './Stats';
import Certificates from './Certificates';

function Info() {
  return (
    <div className='flex flex-col gap-6 items-center w-full h-full p-6 rounded shadow-subtle-sm bg-steel bg-noise'>
      <Stats />
      <Map />
      <Certificates />
    </div>
  );
}

export default Info;
