import Icon from '../Icon';
import Wrapper from '../Containers/Wrapper';

function AccordionItem({ icon, subTitle, text }) {
  return (
    <Wrapper cls='flex gap-2 pr-4 text-justify'>
      <Icon icon={icon} className='text-xl ' />

      <div className='flex flex-col'>
        {subTitle && (
          <h5 className='pl-0 mb-2  font-semibold text-shadow-subtle uppercase border-b text-lightblue'>
            {subTitle}:
          </h5>
        )}
        <p className='text-base '>{text}</p>
      </div>
    </Wrapper>
  );
}

export default AccordionItem;
