import { useMemo, useState } from 'react';
import useProject from '../contexts/useProject';
import ActionBar from './ActionBar';
// import ActionButton from './ActionButton';
import BorderCorners from './BorderCorners';
import Content from './Content';
import Wrapper from './Wrapper';

function ProjectSlideshow() {
  const { projects, setCurProject } = useProject();
  const [startIndex, setStartIndex] = useState(0);

  let lastIndex = startIndex + 3;
  const projectCount = projects.length;

  const displayedProjects = useMemo(
    () => projects.filter((_, i) => i >= startIndex && i <= lastIndex),
    [startIndex, lastIndex, projects]
  );

  function handleNext() {
    if (lastIndex === projectCount - 1) return setStartIndex(0);
    setStartIndex((i) => i + 1);
  }
  function handlePrev() {
    if (startIndex === 0) return setStartIndex(projectCount - 4);
    setStartIndex((i) => i - 1);
  }
  function handleClick(project) {
    setCurProject(project);
  }
  return (
    <Wrapper cls='w-full'>
      <ActionBar style='actionbar-h3' title={`Projects (${projectCount})`}>
        {/* <ActionButton pos='left'>Thumbnails</ActionButton> */}
        {/* <ActionButton pos='right'>List</ActionButton> */}
      </ActionBar>

      <Content cls='flex gap-2 w-full items-center' padding='px-1 py-4'>
        <span
          className='material-symbols-outlined text-2xl cursor-pointer hover:animate-pulse'
          aria-label='Go back'
          onClick={handlePrev}
        >
          chevron_left
        </span>

        <div className='grid grid-cols-4 gap-4'>
          {displayedProjects.map((p, i) => {
            if (i > lastIndex) return;

            return (
              <div key={i} onClick={() => handleClick(p)}>
                <BorderCorners
                  padding='p-1'
                  cornerW='w-3'
                  cornerH='h-3'
                  border='border'
                  rounded='rounded-sm'
                  cls='h-full overflow-hidden shadow-subtle-sm hover:shadow-glow'
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className='object-cover object-top w-full h-full shadow-subtle-sm rounded-sm cursor-pointer'
                  />
                </BorderCorners>
              </div>
            );
          })}
        </div>
        <span
          className='material-symbols-outlined text-2xl cursor-pointer hover:animate-pulse'
          aria-label='Go forward'
          onClick={handleNext}
        >
          chevron_right
        </span>
      </Content>
    </Wrapper>
  );
}

export default ProjectSlideshow;
