import React from 'react';

export default function LogoutButton() {
  const handleLogout = () => {
    // Perform any necessary logout logic here
    console.log('User logged out');
  };

  return (
    <button className='btn btn-danger' onClick={handleLogout}>
      Logout
    </button>
  );
}
