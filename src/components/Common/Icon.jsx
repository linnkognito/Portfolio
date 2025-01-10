function Icon({ icon, cls = '', ariaLabel = '', onClick = '' }) {
  return (
    <span
      className={`material-symbols-outlined ${cls}`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {icon}
    </span>
  );
}

export default Icon;
