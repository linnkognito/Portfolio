function ActionButton({ children, pos = '', onClick = '', cls = '' }) {
  return (
    <button
      className={`px-3 text-base font-medium text-shadow-glow active:drop-shadow-subtle  cursor-pointer uppercase ${
        pos === 'right' ? 'border-l rounded-tr' : ''
      } ${cls}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ActionButton;
