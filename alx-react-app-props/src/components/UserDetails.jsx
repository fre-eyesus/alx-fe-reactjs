// UserDetails.jsx
import React, { useContext } from 'react';
import UserContext from './UserContext';  // Import UserContext

function UserDetails() {
  const userData = useContext(UserContext);  // Use useContext to consume the context

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
