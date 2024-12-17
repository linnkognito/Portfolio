import { useState } from 'react';
import useProject from '../contexts/useProject';
import ActionBar from './ActionBar';
import Wrapper from './Wrapper';
import Code from './Code';
import Content from './Content';
import ActionButton from './ActionButton';
import Spinner from './Spinner';
// import ListItems from './ListItems';

function SourceCode() {
  const {
    curFiles,
    getCurProject,
    loadingFiles,
    fetchingFiles,
    setCurFile,
    curFile,
    fileLoading,
    fileFetching,
  } = useProject();
  const [showDropdown, setShowDropdown] = useState(false);
  const project = { ...getCurProject, curFiles };

  function getLanguage() {
    if (!curFile || !curFile.name) return 'plaintext';
    if (curFile.name === '.gitignore') return 'plaintext';

    const fileType = curFile.name.split('.').at(-1);
    console.log(curFile);
    console.log(`file type: ${fileType}`);

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

  function handleFileClick(file) {
    if (!file?.path) {
      console.warn('Invalid file selected:', file);
      return;
    }

    setCurFile(project, file.path);
    setShowDropdown(false);
  }

  function decodeContent(content) {
    if (!content)
      return '//  Select a file in the dropdown menu to view the source code';
    try {
      return atob(content);
    } catch (err) {
      console.error('Failed to decode content (source code)', err);
      return '// Oh no! Unable to decode file content.';
    }
  }

  return (
    <div className='lg:order-2 order-3 flex flex-col flex-1 bg-midnight shadow-subtle rounded overflow-auto '>
      <ActionBar title='Source Code' style='actionbar-h3'>
        <div className='relative flex items-center'>
          <ActionButton
            pos='right'
            onClick={() => setShowDropdown((shown) => !shown)}
            cls='px-1 text-sm'
          >
            {curFile?.name ? (
              <div className='flex items-center gap-1'>
                <span className='material-symbols-outlined text-sm'>code</span>
                <span>{curFile.name}</span>
              </div>
            ) : (
              'Select a file'
            )}
          </ActionButton>

          {/* Dropdown menu */}
          {showDropdown && (
            <Wrapper
              cls={`absolute z-100 top-full right-0 mt-1 flex flex-col w-fit bg-midnight rounded`}
            >
              <ul className='flex flex-col text-sm gap-1 p-2 cursor-pointer normal-case'>
                {loadingFiles || fetchingFiles ? (
                  <Spinner />
                ) : (
                  curFiles.map((file) => (
                    <li
                      key={file.name}
                      className='flex items-center gap-2 w-full px-1 rounded hover:bg-steel hover:shadow-glow'
                      onClick={() => handleFileClick(file)}
                    >
                      <span className='material-symbols-outlined text-sm'>
                        {file.type === 'dir' ? 'folder' : 'code'}
                      </span>
                      {file.name}
                    </li>
                  ))
                )}
              </ul>
            </Wrapper>
          )}
        </div>
      </ActionBar>

      <Content
        cls='w-full max-w-full content min-h-[300px] max-h-5/6 overflow-auto font-mono bg-steel inner-subtle-sm rounded-b'
        padding='p-0 pr-1'
      >
        {(fileLoading || fileFetching) && <Spinner />}
        {!fileLoading && !fileFetching && curFile && (
          <Code
            code={
              curFile
                ? decodeContent(curFile.content)
                : '//  Select a file in the dropdown menu to view the source code'
            }
            language={getLanguage()}
          />
        )}

        {/* {fileLoading || fileFetching ? (
          <Spinner />
        ) : (
          <Code
            code={
              curFile
                ? decodeContent(curFile.content)
                : '//  Select a file in the dropdown menu to view the source code'
            }
            language={getLanguage()}
          />
        )} */}
      </Content>
    </div>
  );
}

export default SourceCode;
