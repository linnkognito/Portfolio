import Content from './Content';

function Projects({ children }) {
  return (
    <div className='w-full h-full bg-midnight shadow-subtle-sm rounded'>
      <Content
        cls='w-full grid lg:grid-cols-[1fr_2fr] md:grid-cols-[1fr_2fr] gap-4 sm:grid-cols-1'
        padding='p-4'
      >
        {children}
      </Content>
    </div>
  );
}

export default Projects;
