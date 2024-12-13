function ActionButton({ children, pos = '', onClick = '' }) {
  return (
    <button
      className={`px-3 text-base font-medium text-shadow-glow active:drop-shadow-subtle  cursor-pointer uppercase ${
        pos === 'right' ? 'border-l rounded-tr' : ''
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ActionButton;
