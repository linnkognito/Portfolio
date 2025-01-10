import Wrapper from '../Containers/Wrapper';

function Filter({ children }) {
  const styles = {
    wrapper: 'relative rounded cursor-zoom-in group',
    filter:
      'absolute inset-0 bg-midnight-op opacity-30 bg-grain rounded pointer-events-none group-hover:opacity-0 transition-all',
  };

  return (
    <Wrapper cls={styles.wrapper}>
      {children}
      <div className={styles.filter}></div>
    </Wrapper>
  );
}

export default Filter;
