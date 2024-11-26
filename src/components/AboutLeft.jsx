import Wrapper from './Wrapper';
import Contact from './Contact';
import Showcase from './Showcase';
import Technologies from './Technologies';

function AboutLeft() {
  return (
    <div className='w-1/2 p-4 shadow-subtle-sm rounded'>
      <Wrapper cls='flex gap-4'>
        <Contact></Contact>
        <Showcase></Showcase>
      </Wrapper>
      <Technologies></Technologies>
    </div>
  );
}

export default AboutLeft;
Wrapper;
