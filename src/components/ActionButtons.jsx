function ActionButtons({ txtL = '', txtR = '' }) {
  return (
    <div>
      <ActionButton>{txtL}</ActionButton>
      <ActionButton cls='border-l rounded-tr'>{txtR}</ActionButton>
    </div>
  );
}

function ActionButton({ children, cls = '' }) {
  return (
    <button
      className={`min-w-20 px-2 font-medium text-shadow-glow active:drop-shadow-subtle uppercase ${cls}`}
    >
      {children}
    </button>
  );
}

export default ActionButtons;
