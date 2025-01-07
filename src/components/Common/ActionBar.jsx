import Wrapper from '../Containers/Wrapper';
import ActionButton from './ActionButton';

function ActionBar({
  style = 'actionbar-h2',
  title = '',
  cls = '',
  onClick = '',
  buttons = [],
  children,
}) {
  return (
    <Wrapper
      cls={`${style} ${cls} w-full flex items-center justify-between uppercase`}
      onClick={onClick}
    >
      <div className='flex items-center'>{title}</div>
      <div className='flex items-center'>
        {children ||
          (buttons.length &&
            buttons.map((btn, i) => (
              <ActionButton
                key={i}
                pos={btn.pos}
                cls={btn.cls || ''}
                alt={btn.alt || ''}
                title={btn.title || ''}
                onClick={btn.onClick || ''}
              >
                {btn.value}
              </ActionButton>
            ))) ||
          ''}
      </div>
    </Wrapper>
  );
}

export default ActionBar;
