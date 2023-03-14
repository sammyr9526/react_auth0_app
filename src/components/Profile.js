import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className="text-slate-50 justify-center flex mt-5">
        <h1>Welcome {user.name}</h1>
      </div>
    )
  );
};

export default Profile;
