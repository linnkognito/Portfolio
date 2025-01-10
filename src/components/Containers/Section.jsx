function Section({ children }) {
  return (
    <section className='flex flex-col gap-6 w-section p-4 shadow-subtle-sm rounded'>
      {children}
    </section>
  );
}

export default Section;
