import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebase/firebase";

const logOut = () => {
  signOut(auth)
    .then(() => {
      location.reload();
    })
    .catch((err) => alert("Can not sign out..."));
};
const Logout = () => {
  return (
    <button
      onClick={logOut}
      className="text-white bg-orange-700 hover:bg-orange-800 focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-900"
    >
      Sign Out
    </button>
  );
};

export default Logout;
