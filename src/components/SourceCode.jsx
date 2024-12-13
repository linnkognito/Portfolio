import { useProject } from '../contexts/ProjectContext';
import ActionBar from './ActionBar';
import Code from './Code';
import Content from './Content';

function SourceCode() {
  const { curFile, curProject, dispatch } = useProject();

  function handleClick(file) {
    dispatch({ type: 'project/fileSelection', payload: file });
  }

  function getLanguage(fileName) {
    if (!fileName) return console.error('Could not find this file.');

    const fileType = fileName.split('.').at(-1);

    const languageMap = {
      js: 'javascript',
      jsx: 'javascript',
      html: 'html',
      css: 'css',
      scss: 'css',
      sass: 'css',
      json: 'json',
      md: 'markdown',
    };

    return languageMap[fileType] || 'plaintext';
  }

  return (
    <div className='lg:order-1 order-3 flex flex-col flex-1 w-full bg-midnight shadow-subtle rounded'>
      <ActionBar title='Source Code' style='actionbar-h3'>
        <select value={`${curFile ? curFile.name : 'Select a file'}`}>
          {curProject.files.map((file) => {
            //if (file.type !== 'file') return;

            <option
              key={file.sha}
              onClick={file.type === 'dir' ? '' : () => handleClick(file)}
            >
              {file.name}
            </option>;
          })}
        </select>
      </ActionBar>

      <Content
        cls='flex-1 content max-w-full max-h-5/6 overflow-auto font-mono bg-steel inner-subtle-sm rounded-b'
        padding='p-0 pr-1'
      >
        <Code
          code={`${
            curFile
              ? curFile.sourceCode
              : '//  Select a file in the dropdown menu to view the source code'
          }`}
          language={() => getLanguage(curFile.name)}
        />
      </Content>
    </div>
  );
}

export default SourceCode;
