import { useMemo, useState } from 'react';
import useProject from '../../contexts/useProject';
import ActionBar from '../Common/ActionBar';
// import ActionButton from './ActionButton';
import BorderCorners from '../Common/BorderCorners';
import Content from '../Containers/Content';
import Wrapper from '../Containers/Wrapper';
import Icon from '../Common/Icon';

function ProjectSlideshow() {
  const { projects, setCurProject } = useProject();
  const [startIndex, setStartIndex] = useState(0);
  const [hovered, setHovered] = useState(null);

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
      <ActionBar style='actionbar-h3' title={`Projects (${projectCount})`} />

      <Content cls='flex gap-2 w-full items-center' padding='px-1 py-4'>
        <Icon
          icon='chevron_left'
          ariaLabel='Go back'
          onClick={handlePrev}
          cls='text-2xl cursor-pointer hover:animate-pulse'
        />

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
                  cls='h-full overflow-hidden shadow-subtle-sm hover:filter hover:shadow-glow'
                >
                  <div
                    className='relative h-full w-full group cursor-pointer transition-all duration-500'
                    onMouseEnter={() => setHovered(p)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    {/* Image */}
                    <div className='relative h-full w-full hover:blur-[1px] transition-all duration-500'>
                      <img
                        src={p.image}
                        alt={p.title}
                        className='object-cover object-top w-full h-full shadow-subtle-sm rounded-sm z-10'
                      />
                    </div>

                    <>
                      {/* Filter */}
                      <div
                        className={`absolute top-0 w-full h-full bg-midnight z-20 ${
                          hovered === p ? 'opacity-70' : 'opacity-0'
                        } transition-all duration-200`}
                      ></div>

                      {/* Title */}
                      <h5
                        className={`absolute top-0 flex items-center justify-center w-full h-full px-2 z-30 break-words text-offwhite text-center text-shadow-glow ${
                          hovered === p ? 'opacity-100' : 'opacity-0'
                        } transition-all duration-200`}
                      >
                        {p.title}
                      </h5>
                    </>
                  </div>
                </BorderCorners>
              </div>
            );
          })}
        </div>

        <Icon
          icon='chevron_right'
          ariaLabel='Go forward'
          onClick={handleNext}
          cls='text-2xl cursor-pointer hover:animate-pulse'
        />
      </Content>
    </Wrapper>
  );
}

export default ProjectSlideshow;
