function ActionButton({ children, pos = '' }) {
  return (
    <button
      className={`min-w-20 px-1 text-base font-medium text-shadow-glow active:drop-shadow-subtle uppercase ${
        pos === 'right' ? 'border-l rounded-tr' : ''
      }`}
    >
      {children}
    </button>
  );
}

export default ActionButton;
