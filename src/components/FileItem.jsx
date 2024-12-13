import { useProject } from '../contexts/ProjectContext';

function FileItem({ file }) {
  const { dispatch } = useProject();

  function handleFileClick(file) {
    dispatch({ type: 'project/fileSelection', payload: file });
  }

  return (
    <li onClick={() => handleFileClick(file)} className='w-full'>
      <h5>{file.name}</h5>
    </li>
  );
}

export default FileItem;
