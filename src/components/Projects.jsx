import useProject from '../contexts/useProject';
import Content from './Content';
import Spinner from './Spinner';

function Projects({ children }) {
  const { projects, projectsLoading } = useProject();

  return (
    // <div className='w-full max-w-full h-full bg-midnight shadow-subtle-sm rounded'>
    <div className='w-full max-w-full h-full'>
      <Content
        cls='w-full max-w-full grid lg:grid-cols-[1fr_2fr] gap-2 sm:grid-cols-1 overflow-hidden'
        padding='p-0'
        // padding='p-4'
      >
        {projectsLoading && <Spinner />}
        {projects && children}
      </Content>
    </div>
  );
}

export default Projects;
