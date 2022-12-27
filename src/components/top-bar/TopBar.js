import React from 'react';
import { UserContainer } from '../../containers/userContainer';

const styles = {
  width: '98vw',
  height: '50px',
  border: '1px solid gray',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
};

const TopBar = () => {
  //Use useContainer API method to access required data
  const { user } = UserContainer.useContainer();

  return (
    <div style={styles}>
      <h4 style={{ marginRight: 10 }}>{user.name}</h4>
    </div>
  );
};

export default TopBar;
