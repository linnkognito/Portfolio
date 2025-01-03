import Content from './Content';

function ListItem({
  label,
  value,
  uppercase = 'uppercase',
  hover = false,
  cls = '',
  grow = '',
}) {
  return (
    <div
      className={`w-full flex flex-col bg-steel shadow-subtle-sm rounded ${grow}`}
    >
      {/* L a b e l */}
      <h3 className='bg-midnight rounded-t'>{label}</h3>

      {/* V a l u e */}
      <Content>
        <div
          className={`text-justify text-base break-words ${uppercase} ${cls} ${
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
