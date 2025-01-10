import Location from './Location';
import Stats from './Stats';
import Certificates from './Certificates';
import Wrapper from '../Containers/Wrapper';

function Info() {
  const styles = {
    wrapper:
      'flex flex-col gap-6 items-center w-full h-full p-6 rounded shadow-subtle-sm bg-steel bg-noise',
  };

  return (
    <Wrapper cls={styles.wrapper}>
      <Stats />
      <Location />
      <Certificates />
    </Wrapper>
  );
}

export default Info;
