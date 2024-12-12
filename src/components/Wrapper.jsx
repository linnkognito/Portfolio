function Wrapper({ children = '', cls = '', onClick = '' }) {
  return (
    <div className={`${cls}`} onClick={onClick}>
      {children}
    </div>
  );
}

export default Wrapper;
