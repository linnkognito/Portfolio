function ActionBar({ children, style = 'h2', title = '', cls = '' }) {
  return (
    <div className={`${style} ${cls} w-full flex justify-between py-0`}>
      {title}
      {children}
    </div>
  );
}

export default ActionBar;
