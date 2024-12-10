import BorderFrame from './BorderFrame';
import Content from './Content';

function ProjectPreview() {
  return (
    <div className='w-full bg-midnight shadow-subtle rounded'>
      <h3>Preview</h3>
      <Content>
        <BorderFrame>
          <img
            src='/img/array-workout.png'
            alt='Array workout application preview'
          />
        </BorderFrame>
      </Content>
    </div>
  );
}

export default ProjectPreview;
