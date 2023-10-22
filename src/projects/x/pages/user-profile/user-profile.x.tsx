import React from "react";
import { useParams, Outlet, Route, Routes } from "react-router-dom";
import Status from "../status/status.x";

const UserProfile: React.FC = () => {
  const { username } = useParams<{ username: string }>();

  return (
    <div>
      <h1>User Profile: {username} </h1>
      <Routes>
        <Route path="status/:id" element={<Status />} />
      </Routes>
    </div>
  );
};

export default UserProfile;
