import Content from './Content';
import Wrapper from './Wrapper';

function CurrentStatus() {
  return (
    <Wrapper cls='w-full h-fit m-auto shadow-glow rounded-lg overflow-hidden'>
      <h3 className='text-base bg-midnight rounded-t-lg'>Status</h3>

      <Content
        cls='flex h-full shadow-none rounded-lg'
        padding='p-2'
        bg='bg-midnight-op'
      >
        <p className='text-sm italic'>Studying React</p>
      </Content>
    </Wrapper>
  );
}

export default CurrentStatus;
