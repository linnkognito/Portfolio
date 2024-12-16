import useProject from '../contexts/useProject';
import Content from './Content';
import ListItem from './ListItem';
import Spinner from './Spinner';

function ProjectDetails() {
  const { getCurProject, isProjectLoading } = useProject();
  const project = getCurProject();

  return (
    <div className='lg:order-2 order-1 max-w-full flex-none shadow-subtle-sm rounded'>
      <h3>Details</h3>
      <Content cls='bg-steel inner-subtle rounded-b uppercase'>
        {isProjectLoading ? (
          <Spinner />
        ) : (
          <>
            <p>{project.title}</p>
            <ListItem key={'title'} label={'Title'} value={project.title} />
            <ListItem key={'tech'} label={'Tech'} value={project.tech} />
            <ListItem
              key={'description'}
              label={'Description'}
              value={project.description}
            />
          </>
        )}
      </Content>
    </div>
  );
}

export default ProjectDetails;
