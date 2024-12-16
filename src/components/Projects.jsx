import useProject from '../contexts/useProject';
import Content from './Content';
import Spinner from './Spinner';

function Projects({ children }) {
  const { projects, projectsLoading } = useProject();

  return (
    <div className='w-full h-full bg-midnight shadow-subtle-sm rounded'>
      <Content
        cls='w-full grid lg:grid-cols-[1fr_2fr] gap-4 sm:grid-cols-1'
        padding='p-4'
      >
        {projectsLoading && <Spinner />}
        {projects && children}
      </Content>
    </div>
  );
}

export default Projects;
