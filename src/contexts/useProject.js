import { useContext } from 'react';
import ProjectContext from './ProjectContext';

function useProject() {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error('ProjectContext was used outside of its ProjectProvider.');
  }
  return context;
}

export default useProject;
