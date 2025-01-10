import Content from '../Containers/Content';
import Wrapper from '../Containers/Wrapper';

function ListItem({
  children = null,
  label,
  value = null,
  uppercase = 'uppercase',
  hover = false,
  cls = '',
  grow = '',
}) {
  const styles = {
    wrapper: `w-full flex flex-col bg-steel shadow-subtle-sm rounded ${grow}`,
    content: `text-justify text-base break-words ${uppercase} ${cls} ${
      hover ? 'cursor-pointer hover:text-shadow-shine hover:animate-pulse' : ''
    }`,
  };

  return (
    <Wrapper cls={styles.wrapper}>
      <h3>{label}</h3>
      <Content cls={styles.content}>{value || children}</Content>
    </Wrapper>
  );
}

export default ListItem;
