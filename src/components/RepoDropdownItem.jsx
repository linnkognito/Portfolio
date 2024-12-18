import { Icon } from '@mui/material';
import { useState } from 'react';
import useProject from '../contexts/useProject';

function RepoDropdownItem({ key, file, project, setShowDropdown }) {
  const { setCurFile } = useProject();
  const [hoveredDir, setHoveredDir] = useState(null);

  function handleFileClick(file) {
    if (!file?.path) {
      console.warn('Invalid file selected:', file);
      return;
    }

    setCurFile(project, file.path);
    setShowDropdown(false);
  }
  function handleHover(file) {
    if (file?.type !== 'dir') return;

    setHoveredDir(file);
  }

  return (
    <li
      key={key}
      className='flex items-center justify-between gap-2 w-full min-w-full px-1 rounded hover:bg-steel hover:shadow-glow'
      onClick={() => handleFileClick(file)}
      onMouseEnter={() => handleHover(file)}
      onMouseLeave={() => setHoveredDir(null)}
    >
      <span className='w-fit'>
        <Icon
          icon={file.type === 'dir' ? 'folder' : 'code'}
          className='text-sm'
        />
        {file.name}
      </span>

      {hoveredDir && hoveredDir === file && (
        <Icon icon={'arrow_drop_down'} className='text-sm p-0' />
      )}
    </li>
  );
}

export default RepoDropdownItem;
