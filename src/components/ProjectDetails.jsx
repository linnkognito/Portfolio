import useProject from '../contexts/useProject';
import Content from './Content';
import ListItem from './ListItem';
import TechIcon from './TechIcon';

function ProjectDetails() {
  const { getCurProject } = useProject();
  const project = getCurProject;

  return (
    <div className='lg:order-1 order-1 max-w-full h-full rounded'>
      {/* <h2>{project ? `Project: ${project.title}` : 'Project details'}</h2> */}
      <Content padding='p-0' cls='flex flex-col gap-3 h-full rounded uppercase'>
        <ListItem
          label={'Description:'}
          value={project.description}
          uppercase='normal-case'
          cls='grow'
        />
        <ListItem
          label={'Tech used:'}
          cls='flex gap-2 grow-0'
          value={project.tech.map((tech) => (
            <TechIcon
              key={tech.technology}
              icon={tech.icon}
              technology={tech.technology}
            />
          ))}
        />
      </Content>
    </div>
  );
}

export default ProjectDetails;
