import ActionButton from './ActionButton';
import ActionBar from './ActionBar';
import Map from './Map';
// import MapMarker from './MapMarker';
import Stats from './Stats';

function Info() {
  return (
    <div className='flex flex-col gap-6 items-center w-1/2 min-w-1/2 max-w-1/2 h-full p-6 rounded shadow-subtle-sm bg-steel bg-noise'>
      <Stats />
      <Map />
      <ActionBar title='Download Resume' style='actionbar-h2' cls='rounded'>
        <div>
          <ActionButton pos='left'>.doc</ActionButton>
          <ActionButton pos='right'>.pdf</ActionButton>
        </div>
      </ActionBar>
    </div>
  );
}

export default Info;
