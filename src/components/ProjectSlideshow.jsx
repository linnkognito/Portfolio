import { useState } from 'react';
import projects from '../../data/projects.json';
import ActionBar from './ActionBar';
import ActionButton from './ActionButton';
import BorderCorners from './BorderCorners';
import Content from './Content';

function ProjectSlideshow() {
  const [isHovered, setIsHovered] = useState(null);
  let displayAs = 'thumbnails';

  return (
    <div className='w-full'>
      <ActionBar style='actionbar-h3' title='Show as'>
        <ActionButton pos='left'>Thumbnails</ActionButton>
        <ActionButton pos='right'>List</ActionButton>
      </ActionBar>

      <Content cls='flex gap-2 w-full items-center' padding='px-1 py-4'>
        <span
          className='material-symbols-outlined text-2xl cursor-pointer hover:animate-pulse'
          aria-label='Go back'
        >
          chevron_left
        </span>

        <div className='grid grid-cols-4 gap-4'>
          {projects.map((p) =>
            displayAs === 'thumbnails' ? (
              <BorderCorners
                key={p.title}
                padding='p-1'
                cornerW='w-3'
                cornerH='h-3'
                border='border'
                rounded='rounded-sm'
                cls={`${isHovered === p ? 'shadow-glow' : 'shadow-subtle-sm'}`}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className='shadow-subtle-sm rounded-sm cursor-pointer'
                  onMouseEnter={() => setIsHovered(p)}
                  onMouseLeave={() => setIsHovered(null)}
                />
              </BorderCorners>
            ) : (
              ''
            )
          )}
        </div>
        <span
          className='material-symbols-outlined text-2xl cursor-pointer hover:animate-pulse'
          aria-label='Go forward'
        >
          chevron_right
        </span>
      </Content>
    </div>
  );
}

export default ProjectSlideshow;
