import React, { useContext } from 'react'; 
import UserContext from '../UserContext';   


function UserProfile(props) {
  return (
      <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '8px' }}>
          <h2 style={{ color: 'blue', fontSize: '24px' }}>{props.name}</h2>
          <p>Age: <span style={{ fontWeight: 'bold', fontSize: '18px' }}>{props.age}</span></p>
          <p style={{ fontSize: '16px' }}>Bio: {props.bio}</p>
      </div>
  );
}

export default UserProfile;
