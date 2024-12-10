import Content from './Content';

function SourceCode() {
  return (
    <div className='w-full bg-midnight shadow-subtle rounded'>
      <h3 className=' shadow-subtle-b'>Source Code</h3>

      <Content cls=' text-sm text-lightblue font-mono bg-steel inner-subtle-sm rounded-b'>
        Some code
      </Content>
    </div>
  );
}

export default SourceCode;
