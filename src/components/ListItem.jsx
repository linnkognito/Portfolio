function ListItem({ key, label, value, hover = false }) {
  return (
    <div
      key={key}
      className='w-full grid grid-cols-[1fr_auto_1fr] grid-rows[auto] items-start mb-2 last:mb-0 p-1 text-sm uppercase bg-midnight rounded'
    >
      {/* L a b e l */}
      <h5 className='justify-self-end font-semibold text-shadow-glow text-fluid break-words p-0'>
        {label}
      </h5>

      {/* S e p a r a t o r */}
      <span className='mx-3 text-center font-bold text-shadow-subtle text-ice'>
        &rsaquo;
      </span>

      {/* V a l u e */}
      <span
        className={`text-left break-words text-fluid ${
          hover
            ? 'cursor-pointer hover:text-shadow-shine hover:animate-pulse'
            : ''
        }`}
      >
        {value}
      </span>
    </div>
  );
}

export default ListItem;
