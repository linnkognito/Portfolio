import Icon from './Icon';
import { useState } from 'react';
import SpinnerListItem from './SpinnerListItem';

function RepoDropdownItem({
  file,
  handleFileClick,
  toggleDir,
  nestedFilesLoading,
}) {
  const [hoveredDir, setHoveredDir] = useState(null);

  function handleHover(file) {
    if (file?.type !== 'dir') return;
    setHoveredDir(file);
  }

  return (
    <li
      className={`flex flex-col gap-2 w-full min-w-full px-1 rounded hover:bg-steel hover:text-lightblue ${
        file.isOpen ? 'shadow-glow' : 'hover:shadow-glow'
      }`}
      onClick={(e) => {
        e.stopPropagation();
        file.type === 'file' ? handleFileClick(file) : toggleDir(file);
      }}
      onMouseEnter={() => handleHover(file)}
      onMouseLeave={() => setHoveredDir(null)}
    >
      <span className='flex justify-between'>
        <span className='flex w-fit items-center gap-2 '>
          {hoveredDir && hoveredDir === file ? (
            <Icon
              icon={file.type === 'dir' ? 'folder_open' : 'code'}
              className='text-sm'
            />
          ) : (
            <Icon
              icon={file.type === 'dir' ? 'folder' : 'code'}
              className='text-sm text-lightblue'
            />
          )}
          {file.name}
        </span>

        {file.type === 'dir' && (
          <Icon
            icon={!file.isOpen ? 'arrow_drop_down' : 'arrow_drop_up'}
            className='text-sm p-0 hover:animate-pulse'
          />
        )}
      </span>

      {/* Render nested files if the dir is open */}
      {file.isOpen && file.files && (
        <ul className='pl-1 pr-1 mb-1 flex flex-col gap-1 cursor-pointer normal-case rounded'>
          {nestedFilesLoading ? (
            <li>
              <SpinnerListItem />
            </li>
          ) : (
            file.files.map((nestedFile) => (
              <RepoDropdownItem
                key={nestedFile.sha}
                file={nestedFile}
                handleFileClick={handleFileClick}
                toggleDir={toggleDir}
                nestedFilesLoading={nestedFilesLoading}
              />
            ))
          )}
        </ul>
      )}
    </li>
  );
}

export default RepoDropdownItem;
