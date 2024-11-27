import Wrapper from './Wrapper';
import About from './About';
import Showcase from './Showcase';
import Technologies from './Technologies';

function AboutLeft() {
  return (
    <div className='flex flex-col gap-4 w-2/3 min-w-2/3 max-w-2/3 p-4 shadow-subtle-sm rounded'>
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
