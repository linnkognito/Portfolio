function ActionBar({ children, style = 'actionbar-h2', title = '', cls = '' }) {
  return (
    <div
      className={`${style} ${cls} w-full flex items-center justify-between uppercase`}
    >
      <span className='flex items-center'>{title}</span>
      <span className='flex items-center'>{children}</span>
    </div>
  );
}

export default ActionBar;
