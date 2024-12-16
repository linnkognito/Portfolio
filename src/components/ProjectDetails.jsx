import useProject from '../contexts/useProject';
import Content from './Content';
import ListItem from './ListItem';
import Spinner from './Spinner';

function ProjectDetails() {
  const { getCurProject, isProjectLoading } = useProject();
  const project = getCurProject();

  return (
    <div className='lg:order-2 order-1 max-w-full flex-none shadow-subtle-sm rounded'>
      <h3>{project ? `Project: ${project.title}` : 'Project details'}</h3>
      <Content
        padding='p-3'
        cls='flex flex-col gap-3 bg-steel inner-subtle rounded-b uppercase'
      >
        {isProjectLoading ? (
          <Spinner />
        ) : (
          <>
            <ListItem
              key={'description'}
              label={'Description'}
              value={project.description}
              uppercase='normal-case'
            />
            <ListItem
              key={'tech'}
              label={'Tech'}
              value={project.tech.join(', ')}
            />
          </>
        )}
      </Content>
    </div>
  );
}

export default ProjectDetails;
