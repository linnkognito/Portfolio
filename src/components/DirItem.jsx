// import { useState } from 'react';
// import { useProject } from '../contexts/ProjectContext';
// import ListItems from './ListItems';

function DirItem({ file }) {
  // const { curProject, getCurProjectData } = useProject();
  // const [expandedFolders, setExpandedFolders] = useState(new Set());

  // function handleClick(dir) {
  //   toggleFolder(dir);

  //   if (!expandedFolders.has(dir.sha)) {
  //     const folder = getCurProjectData(curProject, curProject.repo, dir.name);
  //     dispatch({ type: 'project/dirSelection', payload: folder });
  //   }
  // }

  // function toggleFolder(dir) {
  //   setExpandedFolders((prev) => {
  //     const newSet = new Set(prev);
  //     if (newSet.has(dir.sha)) {
  //       return newSet.delete(dir.sha);
  //     }

  //     return newSet;
  //   });
  // }

  return (
    <div
      className='w-full'
      // onClick={() => handleClick(file)}
    >
      <details>
        <summary className='flex gap-1 items-center'>
          <h5>
            {file.name}
            <span className='material-symbols-outlined hover:animate-pulse'>
              arrow_drop_down
            </span>
          </h5>
        </summary>

        {/* {expandedFolders.has(file.sha) && <ListItems array={curFolder} />} */}
      </details>
    </div>
  );
}

export default DirItem;
