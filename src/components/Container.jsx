function Container({ children, cls }) {
  return <div className={`px-5 py-3 bg-steel bg-noise ${cls}`}>{children}</div>;
}

export default Container;
