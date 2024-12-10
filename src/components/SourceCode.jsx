import Content from './Content';

// const dropdownOps = [{ name: 'Test', fileType: 'jsx' }];

function SourceCode() {
  return (
    <div className='w-full pb-2 bg-midnight rounded'>
      <h3>Source Code</h3>
      {/* <div className='flex flex-col'>
        <selection value='Test'>
          {dropdownOps.map((op) => (
            <option key={op.name} value={`${op.name}.${op.fileType}`}></option>
          ))}
        </selection>
      </div> */}
      <Content cls=' text-sm text-lightblue font-mono bg-steel inner-subtle-sm rounded-b'>
        Some code
      </Content>
    </div>
  );
}

export default SourceCode;
