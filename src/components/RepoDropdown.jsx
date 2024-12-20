// import useProject from '../contexts/useProject';
// import RepoDropdownItem from './RepoDropdownItem';
// import Spinner from './Spinner';
import Wrapper from './Wrapper';

function RepoDropdown({ children }) {
  // const { curFiles, loadingFiles, fetchingFiles } = useProject();

  return (
    <Wrapper
      cls={`absolute z-100 top-full right-0 mt-1 flex flex-col w-fit bg-midnight rounded font-normal text-sm animate-openDropdown`}
    >
      <ul className='flex flex-col gap-1 p-2 cursor-pointer normal-case'>
        {children}
        {/* {loadingFiles || fetchingFiles ? (
          <Spinner />
        ) : (
          curFiles.map((file) => (
            <RepoDropdownItem key={file.name} file={file} />
          ))
        )} */}
      </ul>
    </Wrapper>
  );
}

export default RepoDropdown;
