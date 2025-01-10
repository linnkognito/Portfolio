import BorderCorners from '../Common/BorderCorners';
import Wrapper from '../Containers/Wrapper';

function ProfilePicture() {
  const styles = {
    wrapper: 'grid grid-cols-1 grow-0 w-[80%] max-w-[240px] h-auto items-start',
    image: 'w-full rounded shadow-subtle',
  };

  return (
    <Wrapper cls={styles.wrapper}>
      <BorderCorners>
        <img
          src='/img/pp-softglitch.jpg'
          alt='Profile picture'
          className={styles.image}
        />
      </BorderCorners>
    </Wrapper>
  );
}

export default ProfilePicture;
