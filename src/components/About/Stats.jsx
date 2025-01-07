import Content from '../Containers/Content';
import Wrapper from '../Containers/Wrapper';
import { v4 as uuid } from 'uuid';

function Stats() {
  const stats = [
    { id: uuid(), left: 'introvert', right: 'extrovert', percentage: '90' },
    { id: uuid(), left: 'solo work', right: 'teamwork', percentage: '60' },
    { id: uuid(), left: 'gives up', right: 'tenacious', percentage: '100' },
  ];

  const styles = {
    wrapper: 'flex flex-col gap-2 w-full',
    content: 'rounded shadow-subtle',
    heading: 'mb-2 bg-midnight rounded-t',
    statusbarWrapper:
      'grid grid-cols-[95px_2fr_95px] items-center w-full max-w-full overflow-hidden text-sm px-4',
    statTextLeft:
      'justify-self-start pr-2 py-2 font-semibold text-shadow-subtle uppercase text-base text-fluid',
    progressBar: 'relative w-full h-4 shadow-subtle rounded bg-dove-op',
    progressBarInner: (stat) =>
      `absolute h-4 ${
        Number(stat.percentage) === 100 ? 'rounded' : 'rounded-l'
      } bg-ice animate-scaleFromLeft`,
    statTextRight:
      'justify-self-end pl-2 py-2 font-semibold text-shadow-subtle uppercase text-base text-fluid',
  };

  return (
    <Wrapper cls={styles.wrapper}>
      <Content cls={styles.content} padding='pb-2' bg='bg-steel'>
        <h3 className={styles.heading}>Stats</h3>

        {/* Statusbar */}
        {stats.map((stat) => (
          <Wrapper key={stat.id} cls={styles.statusbarWrapper}>
            {/* Left text */}
            <div className={styles.statTextLeft}>{stat.left}</div>

            {/* Progress bar */}
            <div className={styles.progressBar}>
              <span
                className={styles.progressBarInner(stat)}
                style={{ width: `${stat.percentage}%` }}
                aria-label={`Personality trait: ${stat.percentage}% ${stat.right}`}
              ></span>
            </div>

            {/* Right text */}
            <div className={styles.statTextRight}>{stat.right}</div>
          </Wrapper>
        ))}
      </Content>
    </Wrapper>
  );
}

export default Stats;
