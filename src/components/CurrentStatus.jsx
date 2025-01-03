import Content from './Content';
import Wrapper from './Wrapper';

function CurrentStatus() {
  return (
    <Wrapper cls='w-fit h-fit m-auto bg-midnight shadow-subtle-sm rounded-lg'>
      <h3 className='text-base rounded-t-lg'>Currently:</h3>

      <Content
        cls='flex items-center rounded-lg'
        padding='p-2'
        bg='bg-midnight'
      >
        <p className='text-sm italic'>Improving my React skills</p>
      </Content>
    </Wrapper>
  );
}

export default CurrentStatus;
