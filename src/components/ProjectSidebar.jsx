function ProjectSidebar({ children }) {
  return (
    <div className='lg:order-1 order-2 flex flex-col h-full gap-5  bg-midnight rounded'>
      {children}
    </div>
  );
}

export default ProjectSidebar;
