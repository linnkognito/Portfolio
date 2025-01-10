import useProject from '../../contexts/useProject';
import Content from '../Containers/Content';
import Wrapper from '../Containers/Wrapper';

function Projects({ children }) {
  const { projects } = useProject();

  const styles = {
    wrapper: 'w-full max-w-full h-full',
    content:
      'w-full max-w-full grid lg:grid-cols-[1fr_2fr] gap-2 sm:grid-cols-1 overflow-hidden',
  };

  return (
    <Wrapper cls={styles.wrapper}>
      <Content cls={styles.content} padding='p-0'>
        {projects && children}
      </Content>
    </Wrapper>
  );
}

export default Projects;
