import useProject from '../contexts/useProject';
import Content from './Content';
import ListItem from './ListItem';
import TechIcon from './TechIcon';

function ProjectDetails() {
  const { getCurProject } = useProject();
  const project = getCurProject;

  return (
    <Content
      padding='p-0'
      cls='lg:order-1 order-1 flex flex-col gap-3 max-w-full h-full rounded uppercase items-stretch'
    >
      <ListItem
        label={'Description'}
        value={project.description}
        uppercase='normal-case'
        grow='grow'
      />
      <ListItem
        label={'Tech used'}
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
  );
}

export default ProjectDetails;
