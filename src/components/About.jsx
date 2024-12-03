import BorderCorners from './BorderCorners';
import ContactDetails from './ContactDetails';
import Content from './Content';

import Wrapper from './Wrapper';

function About() {
  return (
    // Wrapper //
    <Wrapper cls='w-1/2 min-w-1/2 max-w-1/2 rounded shadow-subtle-sm bg-steel bg-noise'>
      {/* Heading */}
      <h2>About</h2>

      {/* Content */}
      <Content
        padding='px-5 pt-6 pb-4'
        bg='none'
        cls='w-full max-w-full overflow-x-hidden'
      >
        {/* Image */}
        <BorderCorners>
          <img
            src='/img/pp.jpg'
            alt='Profile picture'
            className='w-full rounded shadow-subtle'
          />
        </BorderCorners>

        {/* <ContactDetails /> */}
        <Wrapper cls='w-full h-auto flex flex-col gap-2 mt-3'>
          <ContactDetails />
        </Wrapper>
      </Content>
    </Wrapper>
  );
}

export default About;
