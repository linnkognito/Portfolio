import Code from './Code';
import Content from './Content';

const codeSnippet = `
const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5
`;

function SourceCode() {
  return (
    <div className='w-full bg-midnight shadow-subtle rounded'>
      <h3>Source Code</h3>

      <Content cls='font-mono bg-steel inner-subtle-sm rounded-b' padding='p-0'>
        <Code code={codeSnippet} language='javascript' />
      </Content>
    </div>
  );
}

export default SourceCode;
