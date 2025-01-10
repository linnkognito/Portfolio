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
  const styles = {
    wrapper: `${style} ${cls} w-full flex items-center justify-between uppercase`,
    center: 'flex items-center',
  };

  return (
    <Wrapper cls={styles.wrapper} onClick={onClick}>
      <div className={styles.center}>{title}</div>
      <div className={styles.center}>
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
