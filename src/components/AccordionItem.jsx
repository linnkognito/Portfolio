import Icon from './Icon';
import Wrapper from './Wrapper';

function AccordionItem({ icon, subTitle, text }) {
  return (
    <Wrapper cls='flex gap-2'>
      <Icon icon={icon} className='text-xl' />

      <div className='flex flex-col'>
        {subTitle && (
          <h5 className='pl-0 font-semibold text-shadow-subtle uppercase'>
            {subTitle}:
          </h5>
        )}
        <p className='text-base'>{text}</p>
      </div>
    </Wrapper>
  );
}

export default AccordionItem;
