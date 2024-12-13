import { useState } from 'react';
import { useProject } from '../contexts/ProjectContext';
import ActionBar from './ActionBar';
import Wrapper from './Wrapper';
import Code from './Code';
import Content from './Content';
import ActionButton from './ActionButton';
import ListItems from './ListItems';

function SourceCode() {
  const { curFile, curProject } = useProject();
  const [showDropdown, setShowDropdown] = useState(false);

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
        <ActionButton
          pos='right'
          onClick={() => setShowDropdown((shown) => !shown)}
        >
          {curFile?.name || 'Select a file'}
        </ActionButton>
      </ActionBar>

      {showDropdown && (
        <Wrapper cls='relative flex flex-col max-w-[50%]'>
          <ul className='absolute top-0 right-0'>
            <ListItems array={curProject.files} />
          </ul>
        </Wrapper>
      )}

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
          language={() => getLanguage(curFile?.name)}
        />
      </Content>
    </div>
  );
}

export default SourceCode;
