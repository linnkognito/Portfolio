function Section({ children }) {
  return (
    <div className='flex flex-col gap-6 w-section p-4 shadow-subtle-sm rounded'>
      {children}
    </div>
  );
}

export default Section;
