import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
const Logout = () => {
  const { logout } = useAuth0();
  return (
    <div className="m-auto justify-center flex">
      <button
        className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
        onClick={() =>
          logout({
            logoutParams: { returnTo: "https://react-auth0-app.vercel.app" },
          })
        }
      >
        logout
      </button>
    </div>
  );
};

export default Logout;
