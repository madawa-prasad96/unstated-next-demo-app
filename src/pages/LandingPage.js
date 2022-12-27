import React from 'react';
import SideBar from '../components/side-bar/SideBar';
import TopBar from '../components/top-bar/TopBar';

const LandingPage = () => {
  return (
    <div>
      <TopBar userName="John Doe" />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar userName="John Doe" />
        <div style={{ padding: 20 }}>
          <h1>This is landing page</h1>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
