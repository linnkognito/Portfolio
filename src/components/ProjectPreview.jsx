import ActionBar from './ActionBar';
import ActionButton from './ActionButton';
import BorderFrame from './BorderFrame';
import Content from './Content';
import ProjectSlideshow from './ProjectSlideshow';

function ProjectPreview() {
  return (
    <div className='lg:order-2 md:order-2 sm:order-1 flex flex-col gap-3 w-full bg-steel shadow-subtle rounded'>
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
          <img
            src='/img/array-workout.png'
            alt='Array workout application preview'
            className='shadow-subtle-sm rounded'
          />
        </BorderFrame>
      </Content>

      <ProjectSlideshow />
    </div>
  );
}

export default ProjectPreview;
