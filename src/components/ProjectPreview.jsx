import useProject from '../contexts/useProject';
import ActionBar from './ActionBar';
import ActionButton from './ActionButton';
import BorderFrame from './BorderFrame';
import Content from './Content';
import Spinner from './Spinner';
import ProjectSlideshow from './ProjectSlideshow';

function ProjectPreview() {
  const { getCurProject, isProjectLoading } = useProject();
  const project = getCurProject();

  function handleGitHubLink() {
    if (!project || !project.github) return;
    console.log(project);

    window.open(project.github, '_blank', 'noopener,noreferrer');
  }

  return (
    <div className='lg:order-2 xs:order-1 flex flex-col gap-3 w-full bg-steel shadow-subtle rounded'>
      <ActionBar
        style='actionbar-h3'
        title={`preview${project ? `: ${project.title}` : ''}`}
        cls='bg-midnight border-b rounded-t'
      >
        <ActionButton pos='left'>Live</ActionButton>
        <ActionButton pos='right' onClick={handleGitHubLink}>
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
              className='shadow-subtle-sm rounded'
            />
          )}
        </BorderFrame>
      </Content>

      <ProjectSlideshow />
    </div>
  );
}

export default ProjectPreview;
