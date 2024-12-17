import Content from './Content';

function ListItem({
  key,
  label,
  value,
  uppercase = 'uppercase',
  hover = false,
  cls = '',
}) {
  return (
    <div
      key={key}
      className='w-full flex flex-col bg-midnight shadow-subtle-sm rounded'
    >
      {/* L a b e l */}
      <h3 className='text-sma'>
        {label}
        <span className='ml-2 text-base font-bold text-shadow-subtle text-ice'>
          &rsaquo;
        </span>
      </h3>

      {/* V a l u e */}
      <Content>
        <div
          className={`text-justify text-base break-words text-fluid ${cls} ${uppercase} ${
            hover
              ? 'cursor-pointer hover:text-shadow-shine hover:animate-pulse'
              : ''
          }`}
        >
          {value}
        </div>
      </Content>
    </div>
  );
}

export default ListItem;
