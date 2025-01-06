function Profile({ children }) {
  return (
    <div className='grid md:grid-cols-2 grid-cols-1 gap-4 h-full'>
      {children}
    </div>
  );
}

export default Profile;
