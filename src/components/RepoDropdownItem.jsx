import Icon from './Icon';
import { useState } from 'react';

function RepoDropdownItem({
  children,
  file,
  openDirs,
  handleFileClick,
  toggleDir,
}) {
  const [hoveredDir, setHoveredDir] = useState(null);

  function handleHover(file) {
    if (file?.type !== 'dir') return;
    setHoveredDir(file);
  }

  return (
    <li
      className={`flex flex-col gap-2 w-full min-w-full px-1 rounded hover:bg-steel hover:text-lightblue ${
        openDirs.includes(file.sha) ? 'shadow-glow' : 'hover:shadow-glow'
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
            icon={
              !openDirs.includes(file.sha) ? 'arrow_drop_down' : 'arrow_drop_up'
            }
            className='text-sm p-0 hover:animate-pulse'
          />
        )}
      </span>
      {children}
    </li>
  );
}

export default RepoDropdownItem;
