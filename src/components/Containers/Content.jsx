function Content({ children, cls, padding = 'px-5 py-3', bg = '' }) {
  return <div className={`${padding} ${bg} ${cls}`}>{children}</div>;
}

export default Content;
