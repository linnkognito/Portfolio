import Code from './Code';
import Content from './Content';

const codeSnippet = `
const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5
`;

function SourceCode() {
  return (
    <div className='lg:order-1 md:order-1 sm:order-2 flex flex-col flex-1 w-full bg-midnight shadow-subtle rounded'>
      <h3>Source Code</h3>

      <Content
        cls='flex-1 content max-w-full max-h-5/6 overflow-auto font-mono bg-steel inner-subtle-sm rounded-b'
        padding='p-0 pr-1'
      >
        <Code code={codeSnippet} language='javascript' />
      </Content>
    </div>
  );
}

export default SourceCode;
