import React, { useEffect, useState } from 'react';
import './DeletedUsers.css';

const DismissedUsersPage = () => {
  const [dismissedUsers, setDismissedUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('dismissedUsers')) || [];
    setDismissedUsers(storedUsers);
  }, []);

  const handleUndismiss = (userId) => {
    const updatedDismissedUsers = dismissedUsers.filter(user => user.id !== userId);
    setDismissedUsers(updatedDismissedUsers);
    localStorage.setItem('dismissedUsers', JSON.stringify(updatedDismissedUsers));
  };

  return (
    <div className="dismissed__users">
      <h1>Dismissed Users</h1>
      <div className="user__list">
        {dismissedUsers.map(user => (
          <div key={user.id} className="user__card">
            <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
            <h2>{user.first_name} {user.last_name}</h2>
            <p>{user.email}</p>
            <button onClick={() => handleUndismiss(user.id)}>Un-dismiss</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DismissedUsersPage;
