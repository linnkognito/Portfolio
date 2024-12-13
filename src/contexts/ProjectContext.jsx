import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from 'react';
import fetchProjectData from '../utils/fetchProjectData';

const ProjectContext = createContext();

const initialState = {
  curProject: {
    id: '',
    repo: '',
    files: [],
    curFile: '',
    image: '',
    description: '',
    tech: [],
  },
  curFile: {},
  curFolder: [],
  isLoading: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'loading':
      return { ...state, isLoading: true };
    case 'project/selection':
      return {
        ...state,
        ...action.payload,
      };
    case 'project/loaded':
      return {
        ...state,
        files: action.payload,
        code: '// Select a file in the dropdown menu to view the source code',
        isLoading: false,
      };
    case 'project/fileSelection':
      return { ...state, curFile: action.payload, isLoading: false };
    case 'project/dirSelection':
      return {
        ...state,
        curFolder: action.payload,
        isLoading: false,
      };

    case 'rejected':
      return {
        ...state,
        code: '// ❕Error fetching data',
      };

    default:
      throw new Error('Unknown action type');
  }
}

function ProjectProvider({ children }) {
  const [{ curProject, curFile, curFolder, isLoading }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const contextValue = useMemo(
    () => ({
      getProjectData,
      curProject,
      curFile,
      curFolder,
      isLoading,
      dispatch,
    }),
    [getProjectData, curFile, curProject, curFolder, isLoading]
  );

  const getProjectData = useCallback(
    async function getProjectData(project, repo, path) {
      if (project === curProject) return;

      dispatch({ type: 'loading' });

      try {
        const data = await fetchProjectData(repo, path);

        dispatch({ type: 'project/loaded', payload: data });
      } catch {
        dispatch({ type: 'rejected' });
      }
    },
    [curProject]
  );

  return (
    <ProjectContext.Provider value={contextValue}>
      {children}
    </ProjectContext.Provider>
  );
}

function useProject() {
  const context = useContext(ProjectContext);
  if (context === undefined)
    throw new Error('ProjectContext was used outside of its ProjectProvider.');
  return context;
}

export { ProjectProvider, useProject };
