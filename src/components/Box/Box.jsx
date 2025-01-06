import ActionBar from '../ActionBar';
import ActionButton from '../ActionButton';
import Content from '../Containers/Content';
import Heading from './Heading';
import Wrapper from '../Containers/Wrapper';

function Box({
  children,
  heading = '',
  actionbar = false,
  uppercase = true,
  cls = '',
}) {
  return (
    <Wrapper cls={`w-full shadow-subtle rounded-t ${cls}`}>
      {/* Heading option */}
      {heading && <Heading type={heading.type} title={heading.title} />}

      {/* Actionbar option */}
      {actionbar ? (
        <ActionBar
          style={actionbar.style}
          title={actionbar.title}
          cls={actionbar.cls || ''}
        >
          {actionbar.btnLeft ? (
            <ActionButton
              pos='left'
              onClick={actionbar.onClickLeft}
              alt={actionbar.altLeft || ''}
              title={actionbar.titleLeft || ''}
            >
              {actionbar.btnLeft}
            </ActionButton>
          ) : (
            ''
          )}
          {actionbar.btnRight ? (
            <ActionButton
              pos='right'
              onClick={actionbar.onClickRight}
              alt={actionbar.altRight || ''}
              title={actionbar.titleRight || ''}
            >
              {actionbar.btnRight}
            </ActionButton>
          ) : (
            ''
          )}
        </ActionBar>
      ) : (
        ''
      )}

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
