import BorderCorners from './BorderCorners';

function TechIcon({ icon, technology }) {
  return (
    <BorderCorners
      width='w-fit'
      cornerH='h-3'
      cornerW='w-3'
      padding='p-2'
      border='border-lightblue'
      cls='flex items-center'
    >
      <img
        src={icon}
        alt={`${technology} logo`}
        className='min-w-7'
        title={technology}
      />
    </BorderCorners>
  );
}

export default TechIcon;
