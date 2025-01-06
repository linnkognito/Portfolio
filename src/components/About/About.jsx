import Wrapper from '../Containers/Wrapper';
import Content from '../Containers/Content';
import ProfilePicture from './ProfilePicture';
import ContactDetails from './ContactDetails';
import CoverLetter from './CoverLetter';

function About() {
  const styles = {
    wrapper:
      'flex flex-col h-full w-full rounded shadow-subtle-sm bg-steel bg-noise',
    content:
      'flex flex-col grow gap-6 items-center w-full max-w-full h-fit overflow-x-hidden',
  };

  return (
    <Wrapper cls={styles.wrapper}>
      <h2>About</h2>

      <Content padding='px-5 pt-6 pb-4' bg='none' cls={styles.content}>
        <ProfilePicture />
        <ContactDetails />
        <CoverLetter />
      </Content>
    </Wrapper>
  );
}

export default About;
