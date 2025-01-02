import { useState } from 'react';
import Wrapper from './Wrapper';
import ActionBar from './ActionBar';
import ActionButton from './ActionButton';
import Icon from './Icon';
import AccordionItem from './AccordionItem';

function CoverLetterAccordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper cls='p-0 shadow-subtle-sm rounded'>
      <ActionBar
        title={title}
        style='actionbar-h2'
        cls={`${
          !isOpen ? 'rounded' : 'rounded-t border-b'
        } bg-midnight cursor-pointer hover:shadow-subtle hover:bg-steel transition-all`}
        onClick={() => setIsOpen((open) => !open)}
      >
        <ActionButton
          pos='right'
          cls={`${!isOpen ? 'hover:rounded-br' : ''} hover:bg-midnight`}
        >
          <Icon
            icon={!isOpen ? 'arrow_drop_down' : 'arrow_drop_up'}
            className='text-base'
          />
        </ActionButton>
      </ActionBar>

      <div className={isOpen ? 'flex flex-col gap-4 p-4 rounded-b' : ''}>
        {isOpen &&
          content.map((el, i) => (
            <AccordionItem
              key={i}
              icon={el.icon}
              subTitle={el.subTitle ? el.subTitle : false}
              text={el.text}
            />
          ))}
      </div>
    </Wrapper>
  );
}

export default CoverLetterAccordion;
