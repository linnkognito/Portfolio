function Statusbar({ left, right, width = '' }) {
  return (
    <div className='flex items-center border'>
      <span className='px-4 py-2 font-semibold text-shadow-subtle uppercase'>
        {left}
      </span>

      <span className='relative w-60 h-4 shadow-subtle-sm rounded bg-dove-op'>
        <span className={`absolute ${width} h-4 rounded-l bg-ice`}></span>
      </span>

      <span className='px-4 py-2 font-semibold text-shadow-subtle uppercase'>
        {right}
      </span>
    </div>
  );
}

export default Statusbar;
