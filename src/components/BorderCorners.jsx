function BorderCorners({
  children,
  cls = '',
  width = 'w-full',
  padding = 'p-5',
  borderColor = 'border-ice',
  cornerH = 'h-8',
  cornerW = 'w-8',
  rounded = 'rounded',
}) {
  return (
    <div className={`${width} ${padding} ${cls} relative`}>
      <span
        className={`absolute top-0 left-0 ${cornerW} ${cornerH} border-t-2 border-l-2 ${borderColor} ${rounded}`}
      ></span>
      <span
        className={`absolute top-0 right-0 ${cornerW} ${cornerH} border-t-2 border-r-2 ${borderColor} ${rounded}`}
      ></span>

      {children}
      <span
        className={`absolute bottom-0 left-0 ${cornerW} ${cornerH} border-b-2 border-l-2 ${borderColor} ${rounded}`}
      ></span>
      <span
        className={`absolute bottom-0 right-0 ${cornerW} ${cornerH} border-b-2 border-r-2 ${borderColor} ${rounded}`}
      ></span>
    </div>
  );
}

export default BorderCorners;
