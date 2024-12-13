import DirItem from './DirItem';
import FileItem from './FileItem';

function ListItems({ array }) {
  return array.map((file) =>
    file.type === 'dir' ? (
      <DirItem key={file.sha} file={file} />
    ) : (
      <FileItem key={file.sha} file={file} />
    )
  );
}

export default ListItems;
