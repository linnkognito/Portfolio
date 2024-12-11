function FooterSection({ title, listItems = '' }) {
  return (
    <div className='flex flex-col font-semibold border'>
      <h5 className='p-0'>{title}</h5>
      {listItems.map((li) => (
        <p key={li} className='pl-2 text-sm cursor-pointer'>
          {li}
        </p>
      ))}
    </div>
  );
}

export default FooterSection;
