function Button({ children, width = 'w-fit', height = 'h-fit' }) {
  return (
    <button
      className={`bg-dove-op ${width} ${height} px-4 rounded hover:drop-shadow-btn`}
    >
      {children}
    </button>
  );
}

export default Button;
