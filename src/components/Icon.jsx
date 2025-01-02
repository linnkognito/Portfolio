function Icon({ icon, className = '' }) {
  return (
    <span className={`material-symbols-outlined ${className}`}>{icon}</span>
  );
}

export default Icon;
