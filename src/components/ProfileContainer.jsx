import Wrapper from './Wrapper';
import ContactDetails from './ContactDetails';
import Info from './Info';
import Technologies from './Technologies';

function ProfileContainer() {
  return (
    <div className='flex flex-col gap-4 w-2/3 min-w-2/3 max-w-2/3 p-4 shadow-subtle-sm rounded'>
      <Wrapper cls='flex gap-4'>
        <ContactDetails></ContactDetails>
        <Info></Info>
      </Wrapper>
      <Technologies></Technologies>
    </div>
  );
}

export default ProfileContainer;
Wrapper;
