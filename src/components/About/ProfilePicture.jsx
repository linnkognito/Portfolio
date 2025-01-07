import BorderCorners from '../Common/BorderCorners';
import Wrapper from '../Containers/Wrapper';

function ProfilePicture() {
  return (
    <Wrapper cls='grid grid-cols-1 grow-0 w-[80%] max-w-[240px] h-auto items-start'>
      <BorderCorners>
        <img
          src='/img/pp-softglitch.jpg'
          alt='Profile picture'
          className='w-full rounded shadow-subtle'
        />
      </BorderCorners>
    </Wrapper>
  );
}

export default ProfilePicture;
