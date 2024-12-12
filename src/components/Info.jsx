// import ActionButton from './ActionButton';
// import ActionBar from './ActionBar';
// import { Box } from '@mui/material';
import Map from './Map';
// import MapMarker from './MapMarker';
import Stats from './Stats';
import Certificates from './Certificates';

function Info() {
  return (
    <div className='flex flex-col gap-6 items-center w-full h-full p-6 rounded shadow-subtle-sm bg-steel bg-noise'>
      <Stats />
      <Map />
      {/* <ActionBar
        title='Download Resume'
        style='actionbar-h2'
        cls='rounded shadow-dark'
      >
        <span>
          <ActionButton pos='left'>.doc</ActionButton>
          <ActionButton pos='right'>.pdf</ActionButton>
        </span>
      </ActionBar> */}
      <Certificates />
    </div>
  );
}

export default Info;
