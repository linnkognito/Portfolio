import BorderCorners from './BorderCorners';
import ContactDetails from './ContactDetails';
import Content from './Content';
import CoverLetter from './CoverLetter';
import Wrapper from './Wrapper';

function About() {
  return (
    <Wrapper cls='w-full rounded shadow-subtle-sm bg-steel bg-noise'>
      {/* Heading */}
      <h2>About</h2>

      {/* Content */}
      <Content
        padding='px-5 pt-6 pb-4'
        bg='none'
        cls='flex flex-col gap-4 items-center w-full max-w-full h-fit overflow-x-hidden'
      >
        {/* Image */}
        <Wrapper cls='grid md:grid-cols-2 xs:grid-cols-1'>
          <Wrapper cls='h-full'>
            <BorderCorners>
              <img
                src='/img/pp.jpg'
                alt='Profile picture'
                className='w-full rounded shadow-subtle'
              />
            </BorderCorners>
          </Wrapper>
        </Wrapper>
        {/* <ContactDetails /> */}
        <Wrapper cls='w-full h-full flex flex-col gap-2 mt-3'>
          <ContactDetails />
        </Wrapper>

        {/* Cover letter */}
        <Wrapper cls='w-full'>
          <CoverLetter />
        </Wrapper>
      </Content>
    </Wrapper>
  );
}

export default About;
