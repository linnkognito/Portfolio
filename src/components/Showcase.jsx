import Content from './Content';
import Slideshow from './Slideshow';

function Showcase() {
  return (
    <div className='w-full min-w-1/2 max-w-1/2 h-full rounded-t shadow-subtle-sm bg-steel bg-noise'>
      <h2>Showcase</h2>
      <Content>
        <Slideshow />
      </Content>
    </div>
  );
}

export default Showcase;
