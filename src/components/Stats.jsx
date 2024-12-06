import Content from './Content';
import Wrapper from './Wrapper';
import { v4 as uuid } from 'uuid';

const stats = [
  { id: uuid(), left: 'introvert', right: 'extrovert', percentage: '90' },
  { id: uuid(), left: 'solo work', right: 'teamwork', percentage: '60' },
  { id: uuid(), left: 'gives up', right: 'tenacious', percentage: '100' },
  { id: uuid(), left: 'slow learner', right: 'fast learner', percentage: '85' },
];

function Stats() {
  return (
    <Wrapper cls='flex flex-col gap-2 w-full'>
      {/* Stats */}
      <Content cls='rounded shadow-subtle' bg='bg-steel' padding='pb-2'>
        <h3 className='mb-2'>Stats</h3>

        {/* Statusbar + lables */}
        {stats.map((stat) => (
          // <div
          //   key={stat.id}
          //   className='flex gap-2 items-center w-full max-w-full overflow-hidden'
          // >
          <div
            key={stat.id}
            className='grid grid-cols-[1fr_2fr_1fr] items-center w-full max-w-full overflow-hidden text-sm'
          >
            {/* Left text */}
            <span className='px-4 py-2 font-semibold text-shadow-subtle uppercase text-fluid'>
              {stat.left}
            </span>

            {/* Progress bar */}
            <span className='relative w-full min-w-1/2 h-4 shadow-subtle rounded bg-dove-op'>
              <span
                style={{ width: `${stat.percentage}%` }}
                className={`absolute h-4 ${
                  Number(stat.percentage) === 100 ? 'rounded' : 'rounded-l'
                } bg-ice animate-scaleFromLeft`}
                aria-label={`Personality trait: ${stat.percentage}% ${stat.right}`}
              ></span>
            </span>

            {/* Right text */}
            <span className='px-4 py-2 font-semibold text-shadow-subtle uppercase text-fluid'>
              {stat.right}
            </span>
          </div>
        ))}
      </Content>

      {/* Map */}
    </Wrapper>
  );
}

export default Stats;
