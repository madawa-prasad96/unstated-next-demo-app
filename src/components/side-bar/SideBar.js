import React from 'react';
import { Link } from 'react-router-dom';

//Import containers
import { UserContainer } from '../../containers/userContainer';

const SideBar = () => {
  //Use useContainer API method to access required data
  const { user } = UserContainer.useContainer();

  return (
    <div
      style={{
        height: '80vh',
        width: '200px',
        border: '1px solid gray',
        padding: 20,
      }}
    >
      <Link to="/user">Profile</Link>
      <br />
      <br />
      <Link to="/products">Products</Link>
      <p style={{ marginTop: '350px' }}>{user.name}</p>
    </div>
  );
};

export default SideBar;
