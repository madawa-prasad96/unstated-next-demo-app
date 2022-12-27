import { useState } from 'react';
import { createContainer } from 'unstated-next';

const useUserProfile = () => {
  const [user, setUser] = useState({ user_id: '0001', name: 'John Doe' });

  return {
    user,
    setUser,
  };
};
export const UserContainer = createContainer(useUserProfile);
