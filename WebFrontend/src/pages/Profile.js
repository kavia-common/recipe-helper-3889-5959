import React from 'react';
import { useAuth } from '../modules/auth/AuthContext';

function Profile() {
  const { user } = useAuth();
  if (!user) return <div>Please log in to view your profile.</div>;

  return (
    <div className="container">
      <h2>{user.name}'s Profile</h2>
      <p><b>Email:</b> {user.email}</p>
      {/* Add user image/avatar support */}
      {/* Edit profile functionality */}
    </div>
  );
}
export default Profile;
