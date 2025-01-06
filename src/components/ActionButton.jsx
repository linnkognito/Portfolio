function ActionButton({
  children,
  pos = '',
  onClick = '',
  cls = '',
  alt = '',
  title = '',
}) {
  return (
    <button
      className={`px-3 text-base font-medium text-shadow-glow active:drop-shadow-subtle  cursor-pointer uppercase ${
        pos === 'right' ? 'border-l rounded-tr' : ''
      } ${cls}`}
      onClick={onClick}
      alt={alt}
      title={title}
    >
      {children}
    </button>
  );
}

export default ActionButton;
