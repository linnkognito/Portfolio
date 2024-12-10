function ActionButton({ children, pos = '' }) {
  return (
    <button
      className={`px-3 text-base font-medium text-shadow-glow active:drop-shadow-subtle uppercase ${
        pos === 'right' ? 'border-l rounded-tr' : ''
      }`}
    >
      {children}
    </button>
  );
}

export default ActionButton;
