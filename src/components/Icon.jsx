function Icon({ icon, className = '' }) {
  return (
    <span className={`material-symbols-outlined ${className}`}>
      {icon.toLowerCase().trim()}
    </span>
  );
}

export default Icon;
