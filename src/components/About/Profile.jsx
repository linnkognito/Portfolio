import Wrapper from '../Containers/Wrapper';

function Profile({ children }) {
  return (
    <Wrapper cls='grid md:grid-cols-2 grid-cols-1 gap-4 h-full'>
      {children}
    </Wrapper>
  );
}

export default Profile;
