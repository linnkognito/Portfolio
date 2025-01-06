import ContactDetails from './ContactDetails';
import Content from './Content';
import CoverLetter from './CoverLetter';
import ProfilePicture from './ProfilePicture';
import Wrapper from './Wrapper';

function About() {
  return (
    <Wrapper cls='flex flex-col h-full w-full rounded shadow-subtle-sm bg-steel bg-noise'>
      <h2>About</h2>

      <Content
        padding='px-5 pt-6 pb-4'
        bg='none'
        cls='flex flex-col grow gap-6 items-center w-full max-w-full h-fit overflow-x-hidden'
      >
        <Wrapper cls='grid grid-cols-1 grow-0 w-[80%] max-w-[240px] h-auto items-start'>
          <ProfilePicture />
        </Wrapper>

        <Wrapper cls='w-full grow-0'>
          <ContactDetails />
        </Wrapper>

        <CoverLetter />
      </Content>
    </Wrapper>
  );
}

export default About;
