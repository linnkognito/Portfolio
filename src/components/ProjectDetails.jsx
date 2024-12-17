import useProject from '../contexts/useProject';
import Content from './Content';
import ListItem from './ListItem';
import Spinner from './Spinner';
import TechIcon from './TechIcon';

function ProjectDetails() {
  const { getCurProject, isProjectLoading } = useProject();
  const project = getCurProject;

  return (
    <div className='lg:order-1 order-1 max-w-full flex-none shadow-subtle-sm rounded'>
      <h2>{project ? `Project: ${project.title}` : 'Project details'}</h2>
      <Content
        padding='p-3'
        cls='flex flex-col gap-3 bg-midnight inner-subtle rounded-b uppercase'
      >
        {isProjectLoading ? (
          <Spinner />
        ) : (
          <>
            <ListItem
              key={'description'}
              label={'Description:'}
              value={project.description}
              uppercase='normal-case'
            />
            <ListItem
              key={'tech'}
              label={'Tech used:'}
              cls='flex gap-2'
              value={project.tech.map((tech) => (
                <TechIcon
                  key={tech.technology}
                  icon={tech.icon}
                  technology={tech.technology}
                />
              ))}
            />
          </>
        )}
      </Content>
    </div>
  );
}

export default ProjectDetails;
