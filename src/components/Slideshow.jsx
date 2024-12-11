// import { v4 as uuid } from 'uuid';
import { useState } from 'react';
import projects from '../../data/projects.json';

function Slideshow() {
  const [displayAs, setDisplayAs] = useState('thumbnails');

  return (
    <div className='flex gap-2'>
      <span class="material-symbols-outlined">chevron_left</span>
      {projects.map(p => (
        displayAs === 'thumbnails' ? 
          <img key={p.title} src={p.image} alt={p.title} />
        
          
        ))}
      <span class="material-symbols-outlined">chevron_right</span>
    </div>
  );
}

export default Slideshow;
