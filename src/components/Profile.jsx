import Wrapper from './Wrapper';
import About from './About';
import Info from './Info';
import Technologies from './Technologies';

function Profile() {
  return (
    <div className='flex flex-col gap-6 w-section p-4 shadow-subtle-sm rounded'>
      <Wrapper cls='flex gap-4'>
        <About />
        <Info />
      </Wrapper>
      <Technologies></Technologies>
    </div>
  );
}

export default Profile;
Wrapper;
