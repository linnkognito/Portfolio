import ActionBar from './ActionBar';
import ActionButton from './ActionButton';
import Content from './Content';
import Wrapper from './Wrapper';

function Box({
  children,
  heading = '',
  actionbar = false,
  uppercase = true,
  cls = '',
}) {
  return (
    <Wrapper cls={`w-full shadow-subtle rounded-t ${cls}`}>
      {/* Check for heading options */}

      {heading && heading.type === 'h2' && (
        <h2 className='rounded-t'>{heading.title}</h2>
      )}

      {heading && heading.type === 'h3' && (
        <h3 className='bg-midnight rounded-t'>{heading.title}</h3>
      )}

      {/* Check for actionbar options */}

      {actionbar ? (
        <ActionBar
          style={actionbar.style}
          title={actionbar.title}
          cls={actionbar.cls || ''}
        >
          {actionbar.btnLeft ? (
            <ActionButton pos='left'>{actionbar.btnLeft}</ActionButton>
          ) : (
            ''
          )}
          {actionbar.btnRight ? (
            <ActionButton pos='right'>{actionbar.btnRight}</ActionButton>
          ) : (
            ''
          )}
        </ActionBar>
      ) : (
        ''
      )}
      {/* <div className='max-w-full flex-none rounded'> */}
      <div className='max-w-full h-full flex grow rounded'>
        <Content
          cls={`bg-steel inner-subtle rounded-b ${
            uppercase ? 'uppercase' : ''
          }`}
        >
          {children}
        </Content>
      </div>
    </Wrapper>
  );
}

export default Box;
