import Wrapper from './Wrapper';
import About from './About';
import Info from './Info';
import Technologies from './Technologies';

function ProfileContainer() {
  return (
    <div className='flex flex-col gap-6 w-10/12 min-w-2/3 max-w-2/3 p-4 shadow-subtle-sm rounded'>
      <Wrapper cls='flex gap-4'>
        <About />
        <Info />
      </Wrapper>
      <Technologies></Technologies>
    </div>
  );
}

export default ProfileContainer;
Wrapper;
