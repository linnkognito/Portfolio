import BorderCorners from '../Common/BorderCorners';

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
        className='w-[28px]'
        title={technology}
      />
    </BorderCorners>
  );
}

export default TechIcon;
