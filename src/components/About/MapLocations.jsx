import Content from '../Containers/Content';
import Wrapper from '../Containers/Wrapper';

function MapLocations({ markers, setIsHovered }) {
  const styles = {
    wrapper: 'flex flex-col w-full items-center px-4 mb-4 gap-2',
    content:
      'w-full grid grid-cols-[1fr_auto_1fr] items-center gap-2 text-sm uppercase bg-midnight rounded',
    label: 'justify-self-end text-fluid break-words',
    separator: 'mx-2 text-center font-bold text-shadow-subtle text-ice',
    value:
      'text-left break-words text-fluid cursor-crosshair hover:text-shadow-shine hover:animate-pulse',
  };
  return (
    <Wrapper cls={styles.wrapper}>
      {markers.map((city) => (
        <Content key={city.label} padding='p-0' cls={styles.content}>
          {/* L a b e l */}
          <h5 className={styles.label}>[ {city.label} ]</h5>

          {/* S e p a r a t o r */}
          <span className={styles.separator}>›</span>

          {/* V a l u e */}
          <span
            className={styles.value}
            onMouseEnter={() => setIsHovered(city.location)}
            onMouseLeave={() => setIsHovered(null)}
          >
            {city.value}
          </span>
        </Content>
      ))}
    </Wrapper>
  );
}

export default MapLocations;
