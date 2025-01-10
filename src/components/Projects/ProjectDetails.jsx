import useProject from '../../contexts/useProject';
import Content from '../Containers/Content';
import ListItem from './ListItem';
import TechIcon from './TechIcon';

function ProjectDetails() {
  const { getCurProject } = useProject();
  const project = getCurProject;

  const styles = {
    content:
      'lg:order-1 order-1 flex flex-col gap-3 max-w-full h-full rounded uppercase items-stretch',
    description: 'text-lightblue',
    tech: 'flex gap-2 grow-0',
  };

  return (
    <Content padding='p-0' cls={styles.content}>
      <ListItem
        label='Description'
        value={project.description}
        uppercase='normal-case'
        grow='grow'
        cls={styles.description}
      />
      {project.features && (
        <ListItem label='Features' uppercase='normal-case'>
          {project.features.map((feature, i) => (
            <div className='flex gap-2 items-center' key={i}>
              <span>&rsaquo;</span>
              <p className='text-lightblue'>{feature}</p>
            </div>
          ))}
        </ListItem>
      )}

      <ListItem
        label='Tech used'
        cls={styles.tech}
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
