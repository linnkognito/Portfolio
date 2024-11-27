function CustomH5({ children, cls = '' }) {
  return (
    <h5>
      <span className={`pr-1 ${cls}`}>[</span>
      <span>{children}</span>
      <span className='pl-1'>]</span>
    </h5>
  );
}

export default CustomH5;

{
  /* <H5 title='Sometitle' />; */
}
