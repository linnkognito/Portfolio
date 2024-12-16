import { useProject } from '../contexts/ProjectContext';
import ActionBar from './ActionBar';
import ActionButton from './ActionButton';
import BorderFrame from './BorderFrame';
import Content from './Content';
import Spinner from './Spinner';
import ProjectSlideshow from './ProjectSlideshow';

function ProjectPreview() {
  const { projects, getCurProjectData, selectedRepo, projectsLoading } =
    useProject();

  return (
    <div className='lg:order-2 xs:order-1 flex flex-col gap-3 w-full bg-steel shadow-subtle rounded'>
      <ActionBar
        style='actionbar-h3'
        title='preview'
        cls='bg-midnight border-b rounded-t'
      >
        <ActionButton pos='left'>Live</ActionButton>
        <ActionButton pos='right'>GitHub</ActionButton>
      </ActionBar>
      <Content>
        <BorderFrame>
          {projectsLoading && <Spinner />}
          {curProject && (
            <img
              src={curProject.image}
              alt={`Preview image for the ${curProject.title} application.`}
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
