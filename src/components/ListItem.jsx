import Content from './Containers/Content';
import Wrapper from './Containers/Wrapper';

function ListItem({
  label,
  value,
  uppercase = 'uppercase',
  hover = false,
  cls = '',
  grow = '',
}) {
  const styles = {
    wrapper: `w-full flex flex-col bg-steel shadow-subtle-sm rounded ${grow}`,
    heading: 'bg-midnight rounded-t',
    content: `text-justify text-base break-words ${uppercase} ${cls} ${
      hover ? 'cursor-pointer hover:text-shadow-shine hover:animate-pulse' : ''
    }`,
  };

  return (
    <Wrapper cls={styles.wrapper}>
      <h3 className={styles.heading}>{label}</h3>
      <Content cls={styles.content}>{value}</Content>
    </Wrapper>
  );
}

export default ListItem;
