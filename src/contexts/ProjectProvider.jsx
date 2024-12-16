import { useCallback, useEffect, useState } from 'react';
import ProjectContext from './ProjectContext';
import { useQueryClient } from '@tanstack/react-query';
import projects from '../../data/projects.json';

function ProjectProvider({ children }) {
  const queryClient = useQueryClient();
  const initialProject = projects[0];

  const [initialMount, setInitialMount] = useState(true);
  const [isProjectLoading, setIsProjectLoading] = useState(false);

  const setCurProject = useCallback(
    (project) => {
      if (!project) return;

      setIsProjectLoading(true);

      queryClient.setQueryData({
        queryKey: ['curProject'],
        queryFn: () => project,
      });

      setIsProjectLoading(false);
    },
    [queryClient]
  );

  //________________________________________________//

  const getCurProject = useCallback(() => {
    return (
      queryClient.getQueryData({ queryKey: ['curProject'] }) || initialProject
    );
  }, [queryClient, initialProject]);
  //________________________________________________//

  useEffect(() => {
    if (initialMount) {
      setIsProjectLoading(true);
      setCurProject(initialProject);
      setInitialMount(false);
      setIsProjectLoading(false);
    }
  }, [initialMount, initialProject, setCurProject]);

  //________________________________________________//

  return (
    <ProjectContext.Provider
      value={{
        projects,
        initialProject,
        setCurProject,
        getCurProject,
        isProjectLoading,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

export default ProjectProvider;

// const setCurProject = useCallback(
//   async (project) => {
//     if (!project) return;

//     try {
//       setCurProjectLoading(true);
//       const files = await fetchProjectData(project.repo);
//       const mergedProject = { ...project, files };

//       queryClient.setQueryData({
//         queryKey: ['curProject'],
//         updater: () => mergedProject,
//       });

//       setCurProjectLoading(false);

//       return mergedProject;
//     } catch (err) {
//       setCurProjectLoading(false);
//       console.error(
//         'Error setting current project (Origin: setCurProject',
//         err
//       );
//     }
//   },
//   [queryClient]
// );

// useEffect(() => {
//   async function setInitialProject() {
//     if (initialMount && projects && projects.length > 0) {
//       await setCurProject(projects[0]);
//       setInitialMount(false);
//     }
//   }

//   setInitialProject();
// }, [initialMount, projects, setCurProject, getCurProject]);
