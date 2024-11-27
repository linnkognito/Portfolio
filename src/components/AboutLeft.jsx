import Wrapper from './Wrapper';
import About from './About';
import Showcase from './Showcase';
import Technologies from './Technologies';

function AboutLeft() {
  return (
    <div className='w-1/2 min-w-1/2 max-w-1/2 p-4 shadow-subtle-sm rounded'>
      <Wrapper cls='flex gap-4'>
        <About></About>
        <Showcase></Showcase>
      </Wrapper>
      <Technologies></Technologies>
    </div>
  );
}

export default AboutLeft;
Wrapper;
