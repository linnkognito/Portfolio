import Statusbar from './Statusbar';
import Wrapper from './Wrapper';

function Info() {
  return (
    <Wrapper cls='w-1/2 min-w-1/2 max-w-1/2 rounded-t shadow-subtle-sm bg-steel bg-noise'>
      <div className='w-fit bg-steel'>
        <Statusbar left='Introvert' right='extrovert' width='w-56' />
      </div>
    </Wrapper>
  );
}

export default Info;
