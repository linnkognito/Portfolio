import { useState } from 'react';
import { useProject } from '../contexts/ProjectContext';
import ListItems from './ListItems';

function DirItem({ file }) {
  const { curProject, curFolder, getProjectData, dispatch } = useProject();
  const [isExpanded, setIsExpanded] = useState(false);

  function handleDirClick(dir) {
    setIsExpanded((is) => !is);
    const folder = getProjectData(curProject, curProject.repo, dir.name);

    dispatch({ type: 'project/dirSelection', payload: folder });
  }

  return (
    <div className='w-full' onClick={() => handleDirClick(file)}>
      <details>
        <summary className='flex gap-1 items-center'>
          <h5>
            {file.name}
            <span className='material-symbols-outlined hover:animate-pulse'>
              arrow_drop_down
            </span>
          </h5>
        </summary>

        {isExpanded && <ListItems array={curFolder} />}
      </details>
    </div>
  );
}

export default DirItem;
