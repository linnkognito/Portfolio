import useProject from '../../contexts/useProject';
import ActionBar from '../Common/ActionBar';
import ActionButton from '../Common/ActionButton';
import BorderFrame from '../Common/BorderFrame';
import Content from '../Containers/Content';
import Spinner from '../Common/Spinner';
import ProjectSlideshow from './ProjectSlideshow';
import Wrapper from '../Containers/Wrapper';

function ProjectPreview() {
  const { getCurProject, isProjectLoading } = useProject();
  const project = getCurProject;

  function openLink(link) {
    if (!project || !link) return;
    window.open(link, '_blank', 'noopener,noreferrer');
  }

  return (
    <Wrapper cls='lg:order-2 xs:order-1 flex flex-col gap-3 bg-steel shadow-subtle rounded m-1'>
      <ActionBar
        style='actionbar-h3'
        title={project?.title || 'Preview'}
        cls='bg-midnight rounded-t'
      >
        <ActionButton pos='left' onClick={() => openLink(project.live)}>
          Live
        </ActionButton>
        <ActionButton pos='right' onClick={() => openLink(project.github)}>
          GitHub
        </ActionButton>
      </ActionBar>
      <Content>
        <BorderFrame>
          {isProjectLoading ? (
            <Spinner />
          ) : (
            <img
              src={project.image}
              alt={`Preview image for the ${project.title} application.`}
              className='shadow-subtle-sm rounded max-h-[344px]'
            />
          )}
        </BorderFrame>
      </Content>

      <ProjectSlideshow />
    </Wrapper>
  );
}

export default ProjectPreview;
