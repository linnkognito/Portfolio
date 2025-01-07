import ActionBar from '../../Common/ActionBar';
import Content from '../Content';
import Heading from './Heading';
import Wrapper from '../Wrapper';

function Box({
  children,
  heading = '',
  actionbar = false,
  uppercase = true,
  cls = '',
}) {
  const styles = {
    wrapper: `w-full shadow-subtle rounded-t ${cls}`,
    innerWrapper: 'max-w-full h-full flex grow rounded',
    content: `bg-steel inner-subtle rounded-b ${uppercase && 'uppercase'}`,
  };

  return (
    <Wrapper cls={styles.wrapper}>
      {/* Heading option */}
      {heading && <Heading type={heading.type} title={heading.title} />}

      {/* Actionbar option */}
      {actionbar && (
        <ActionBar
          style={actionbar.style}
          title={actionbar.title}
          cls={actionbar.cls}
          onClick={actionbar.onClick}
          buttons={actionbar.buttons}
        />
      )}

      <Wrapper cls={styles.innerWrapper}>
        <Content cls={styles.content}>{children}</Content>
      </Wrapper>
    </Wrapper>
  );
}

export default Box;
