import Content from './Content';
import Wrapper from './Wrapper';
import { v4 as uuid } from 'uuid';

const stats = [
  { id: uuid(), left: 'introvert', right: 'extrovert', percentage: '90' },
  { id: uuid(), left: 'solo work', right: 'teamwork', percentage: '60' },
  { id: uuid(), left: 'gives up', right: 'tenacious', percentage: '100' },
];

function Stats() {
  return (
    <Wrapper cls='flex flex-col gap-2 w-full'>
      {/* Stats */}
      <Content cls='rounded shadow-subtle' bg='bg-steel' padding='pb-2'>
        <h3 className='mb-2 bg-midnight rounded-t'>Stats</h3>

        {/* Statusbar + lables */}
        {stats.map((stat) => (
          <div
            key={stat.id}
            className='grid grid-cols-[95px_2fr_95px] lg:grid-cols-[80px_2fr_80px] items-center w-full max-w-full overflow-hidden text-sm px-4'
          >
            {/* Left text */}
            {/* <span className='pr-4 py-2 font-semibold text-shadow-subtle uppercase text-fluid'> */}
            <span className='justify-self-start pr-2 py-2 font-semibold text-shadow-subtle uppercase text-base lg:text-fluid'>
              {stat.left}
            </span>

            {/* Progress bar */}
            <span className='relative w-full h-4 shadow-subtle rounded bg-dove-op'>
              <span
                style={{ width: `${stat.percentage}%` }}
                className={`absolute h-4 ${
                  Number(stat.percentage) === 100 ? 'rounded' : 'rounded-l'
                } bg-ice animate-scaleFromLeft`}
                aria-label={`Personality trait: ${stat.percentage}% ${stat.right}`}
              ></span>
            </span>

            {/* Right text */}
            {/* <span className='pl-4 py-2 font-semibold text-shadow-subtle uppercase text-fluid'> */}
            <span className='justify-self-end pl-2 py-2 font-semibold text-shadow-subtle uppercase text-base lg:text-fluid'>
              {stat.right}
            </span>
          </div>
        ))}
      </Content>
    </Wrapper>
  );
}

export default Stats;
