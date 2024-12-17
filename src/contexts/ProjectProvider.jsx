import { useCallback } from 'react';
import ProjectContext from './ProjectContext';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import projects from '../../data/projects.json';
import fetchProjectData from '../utils/fetchProjectData';

function ProjectProvider({ children }) {
  const queryClient = useQueryClient();
  const initialProject = projects[0];

  const setCurProject = useCallback(
    (project) => {
      if (!project) return;

      queryClient.setQueryData(['curProject'], project);
    },
    [queryClient]
  );

  //________________________________________________//

  const {
    data: getCurProject,
    isLoading: isProjectLoading,
    isFetching: isProjectFetching,
  } = useQuery({
    queryKey: ['curProject'],
    initialData: initialProject,
  });

  //________________________________________________//

  const {
    data: curFiles = [],
    isLoading: loadingFiles,
    isFetching: fetchingFiles,
  } = useQuery({
    queryKey: ['curFiles', getCurProject?.repo],
    queryFn: () => fetchProjectData(getCurProject.repo),
    enabled: !!getCurProject?.repo,
  });
  //________________________________________________//

  const setCurFile = useCallback(
    async (project, path) => {
      if (!project?.repo || !path) {
        return console.warn(
          'Can not set current file: Invalid project or path',
          project,
          path
        );
      }

      try {
        const file = await queryClient.fetchQuery({
          queryKey: ['curFile'],
          queryFn: () => fetchProjectData(project.repo, path),
        });
        console.log(file);
      } catch (err) {
        console.error('Error setting current file', err);
      }
    },
    [queryClient]
  );

  //________________________________________________//

  const {
    data: curFile = {},
    isLoading: loadingFile,
    isFetching: fetchingFile,
  } = useQuery({
    queryKey: ['curFile'],
  });

  //________________________________________________//

  return (
    <ProjectContext.Provider
      value={{
        projects,
        initialProject,
        setCurProject,
        getCurProject,
        isProjectLoading,
        isProjectFetching,
        curFiles,
        loadingFiles,
        fetchingFiles,
        setCurFile,
        curFile,
        loadingFile,
        fetchingFile,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

export default ProjectProvider;
