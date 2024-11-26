function ActionBar({ children, title = '', cls = '' }) {
  return (
    <div className={`actionbar flex justify-between ${cls}`}>
      {title}
      {children}
    </div>
  );
}

export default ActionBar;

// <ActionBar cls='actionbar-h2' title='Actionbar h2'>
//   <ActionButtons txtL='Left' txtR='Right' />
// </ActionBar>
// <br />
// <ActionBar cls='actionbar-h3' title='Actionbar h3'>
//   <ActionButtons txtL='Left' txtR='Right' />
// </ActionBar>
