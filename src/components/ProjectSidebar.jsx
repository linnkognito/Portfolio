import ActionBar from './ActionBar';
import ActionButton from './ActionButton';

function ProjectSidebar({ children }) {
  return (
    <div className='flex flex-col gap-6 bg-midnight rounded'>
      {children}

      <ActionBar style='actionbar-h3' title='navigation' cls='border-b'>
        <ActionButton pos='left'>Live</ActionButton>
        <ActionButton pos='right'>GitHub</ActionButton>
      </ActionBar>
    </div>
  );
}

export default ProjectSidebar;
