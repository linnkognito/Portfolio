import { useCallback } from 'react';
import ProjectContext from './ProjectContext';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import projects from '../../data/projects.json';

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

  return (
    <ProjectContext.Provider
      value={{
        projects,
        initialProject,
        setCurProject,
        getCurProject,
        isProjectLoading,
        isProjectFetching,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

export default ProjectProvider;

// import { useCallback } from 'react';
// import ProjectContext from './ProjectContext';
// import { useQuery, useQueryClient } from '@tanstack/react-query';
// import projects from '../../data/projects.json';

// function ProjectProvider({ children }) {
//   const queryClient = useQueryClient();
//   const initialProject = projects[0];

//   // const [initialMount, setInitialMount] = useState(true);
//   // const [isProjectLoading, setIsProjectLoading] = useState(false);

//   const setCurProject = useCallback(
//     (project) => {
//       if (!project) return;

//       // setIsProjectLoading(true);

//       queryClient.setQueryData(['curProject'], project);
//       // queryClient.setQueryData({
//       //   queryKey: ['curProject'],
//       //   queryFn: () => project,
//       // });

//       // setIsProjectLoading(false);
//     },
//     [queryClient]
//   );

//   //________________________________________________//

//   // const getCurProject = useCallback(() => {
//   //   return (
//   //     queryClient.getQueryData({ queryKey: ['curProject'] }) || initialProject
//   //   );
//   // }, [queryClient, initialProject]);
//   const {
//     data: getCurProject,
//     isLoading: isProjectLoading,
//     isFetching: isProjectFetching,
//   } = useQuery({
//     queryKey: ['curProject'],
//     initialData: initialProject,
//   });
//   //________________________________________________//

//   // useEffect(() => {
//   //   if (initialMount) {
//   //     setIsProjectLoading(true);
//   //     setCurProject(initialProject);
//   //     setInitialMount(false);
//   //     setIsProjectLoading(false);
//   //   }
//   // }, [initialMount, initialProject, setCurProject]);

//   //________________________________________________//

//   return (
//     <ProjectContext.Provider
//       value={{
//         projects,
//         initialProject,
//         setCurProject,
//         getCurProject,
//         isProjectLoading,
//         isProjectFetching,
//       }}
//     >
//       {children}
//     </ProjectContext.Provider>
//   );
// }

// export default ProjectProvider;

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
