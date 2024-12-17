import BorderCorners from './BorderCorners';
import Wrapper from './Wrapper';
import data from '../../data/technologies.json';

function Technologies() {
  return (
    <Wrapper cls='w-full shadow-subtle-sm rounded'>
      <h2>Technologies</h2>
      <div className='flex flex-wrap gap-4 p-4 bg-steel rounded-b '>
        {data.map((tech) => (
          <div
            key={tech.technology}
            className='flex items-center min-w-[200px] px-2 bg-midnight uppercase rounded'
          >
            <BorderCorners
              width='w-fit'
              cornerH='h-4'
              cornerW='w-4'
              padding='p-2'
              border='border-lightblue'
              cls='flex items-center min-w-11 min-h-11'
            >
              <img
                src={tech.icon}
                alt={`${tech.technology} logo`}
                className=''
              />
            </BorderCorners>
            <span className='flex flex-col p-4 '>
              <h5 className='p-0'>{tech.technology}</h5>
              <p className='text-xs italic text-lightblue'>{tech.level}</p>
            </span>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

export default Technologies;
