function Footer() {
  function handleClick() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <footer className='flex w-full justify-between px-4 py-2 mt-10 mb-0 bg-steel bg-noise border-t border-offwhite-op'>
      <div className='p-0 hover:cursor-pointer' onClick={handleClick}>
        <h5 className='flex items-center gap-1 text-xs'>
          Back to top
          <span className='material-symbols-outlined text-xs hover:animate-pulse'>
            keyboard_double_arrow_up
          </span>
        </h5>
      </div>
      <h5 className='text-xs'>&copy; Linn Johansen, 2024</h5>
    </footer>
  );
}

export default Footer;
