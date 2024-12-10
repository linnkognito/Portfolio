function BorderFrame({
  children,
  cls = '',
  width = 'w-full',
  padding = 'p-0',
  border = 'border-lightblue border-2 rounded',
  widthX = 'w-24',
  heightY = 'h-16',
}) {
  return (
    <div
      className={`${width} ${padding} ${cls} border border-lightblue relative shadow-glow`}
    >
      {/* Top border */}
      <span
        className={`absolute top-0 left-1/2 -translate-x-1/2 ${widthX} ${border} border-t`}
      ></span>

      {/* Bottom border */}
      <span
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 ${widthX} ${border} border-b`}
      ></span>

      {/* Left border */}
      <span
        className={`absolute top-1/2 left-0 -translate-y-1/2 ${heightY} ${border} border-l`}
      ></span>

      {/* Right border */}
      <span
        className={`absolute top-1/2 right-0 -translate-y-1/2 ${heightY} ${border} border-r`}
      ></span>

      {children}
    </div>
  );
}

export default BorderFrame;
