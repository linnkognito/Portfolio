function Button({ children, width = 'w-fit' }) {
  return (
    <button
      className={`bg-dove-op ${width} px-4 rounded hover:drop-shadow-btn`}
    >
      {children}
    </button>
  );
}

export default Button;
