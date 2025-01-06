function AppContainer({ children }) {
  return (
    <div className='flex flex-col gap-4 w-full max-w-[1500px] lg:w-[80vw] items-center mx-auto pt-4'>
      {children}
    </div>
  );
}

export default AppContainer;
