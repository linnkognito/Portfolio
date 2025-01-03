import BorderCorners from './BorderCorners';

function ProfilePicture() {
  return (
    <BorderCorners>
      <img
        src='/img/pp-softglitch.jpg'
        alt='Profile picture'
        className='w-full rounded shadow-subtle'
      />
    </BorderCorners>
  );
}

export default ProfilePicture;
