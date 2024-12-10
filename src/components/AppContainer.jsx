function AppContainer({ children }) {
  return (
    <div className='flex flex-col gap-4 w-full items-center py-4'>
      {children}
    </div>
  );
}

export default AppContainer;
