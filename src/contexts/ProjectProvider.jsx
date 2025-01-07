import { useCallback } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import ProjectContext from './ProjectContext';
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
    queryFn: async () => {
      const files = await fetchProjectData(getCurProject.repo);
      return files.map((file) =>
        file.type === 'dir' ? { ...file, isOpen: false } : file
      );
    },
    enabled: !!getCurProject?.repo,
  });
  //________________________________________________//

  async function toggleDir(dir) {
    const { repo } = getCurProject;

    if (dir.isOpen === undefined) dir.isOpen = false;
    // console.log(`toggleDir function: ${dir} | ${dir.isOpen}`);

    // Dir is already open
    if (dir.isOpen) {
      queryClient.setQueryData(['curFiles', repo], (oldFiles) =>
        oldFiles.map((file) =>
          file.path === dir.path ? { ...file, isOpen: false } : file
        )
      );

      return;
    }

    // Fetch files if not already fetched
    if (!dir.files) {
      try {
        const fetchedFiles = await fetchDirData(repo, dir.path);

        queryClient.setQueryData(['curFiles', repo, dir.path], (oldFiles) =>
          oldFiles.map((file) =>
            file.path === dir.path
              ? { ...file, files: fetchedFiles, isOpen: true }
              : file
          )
        );
      } catch (err) {
        console.error(`Failed to fetch dir contents (${err})`);
      }
    } else {
      // Mark as open without re-fetching files:
      queryClient.setQueryData(['curFiles', repo, dir.path], (oldFiles) =>
        oldFiles.map((file) =>
          file.path !== dir.path ? { ...file, isOpen: true } : file
        )
      );
    }
  }
  //________________________________________________//

  async function fetchDirData(repo, path) {
    try {
      const data = await queryClient.fetchQuery({
        queryKey: ['dirContent', repo, path],
        queryFn: () => fetchProjectData(repo, path), // Fetch dir data
      });

      return data;
    } catch (err) {
      console.error('Failed fetching contents of dir', err);
    }
  }

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
        await queryClient.fetchQuery({
          queryKey: ['curFile'],
          queryFn: () => fetchProjectData(project.repo, path),
        });
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
        fetchDirData,
        toggleDir,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

export default ProjectProvider;
