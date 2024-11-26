function Wrapper({ children = '', cls = '' }) {
  return <div className={`${cls}`}>{children}</div>;
}

export default Wrapper;
