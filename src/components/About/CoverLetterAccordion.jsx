import generateID from '../../utils/generateID';

import Wrapper from '../Containers/Wrapper';
import ActionBar from '../Common/ActionBar';
import ActionButton from '../Common/ActionButton';
import Content from '../Containers/Content';
import Icon from '../Common/Icon';
import AccordionItem from './AccordionItem';

function CoverLetterAccordion({ title, content, isOpen, setIsOpen }) {
  const actionbar = {
    title,
    style: 'actionbar-h2',
    cls: `${
      !isOpen ? 'rounded' : 'rounded-t border-b'
    } bg-midnight cursor-pointer hover:shadow-subtle hover:bg-steel transition-all`,
    onClick: setIsOpen,
  };

  const styles = {
    wrapper: 'p-0 shadow-subtle-sm rounded',
    content: 'flex flex-col gap-4 p-4 rounded-b',
  };

  return (
    <Wrapper cls={styles.wrapper}>
      <ActionBar
        title={actionbar.title}
        style={actionbar.style}
        cls={actionbar.cls}
        onClick={actionbar.onClick}
      >
        <ActionButton
          pos='right'
          cls={`${!isOpen && 'hover:rounded-br'} hover:bg-midnight`}
        >
          <Icon
            icon={!isOpen ? 'arrow_drop_down' : 'arrow_drop_up'}
            cls='text-base'
          />
        </ActionButton>
      </ActionBar>

      <Content padding='p-0' cls={isOpen && styles.content}>
        {isOpen &&
          content.map((el) => (
            <AccordionItem
              key={el.id || generateID()}
              icon={el.icon}
              subTitle={el.subTitle || false}
              text={el.text}
            />
          ))}
      </Content>
    </Wrapper>
  );
}

export default CoverLetterAccordion;
