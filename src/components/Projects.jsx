import Content from './Content';

function Projects({ children }) {
  return (
    <div className='w-full bg-midnight  shadow-subtle-sm rounded'>
      <h2>Projects</h2>
      <Content cls='w-full grid grid-cols-[1fr_2fr] gap-4' padding='p-4'>
        {children}
      </Content>
    </div>
  );
}

export default Projects;
