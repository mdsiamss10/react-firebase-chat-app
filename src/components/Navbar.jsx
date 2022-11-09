import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import Logout from "./Logout";
import Signin from "./Signin";

function Navbar() {
  const style = {
    nav: `bg-purple-700 shadow-lg md:flex-row flex flex-col justify-between space-y-2 md:space-y-2 items-center p-4 rounded-tr-lg px-10 rounded-tl-lg`,
    heading: `text-white text-2xl font-medium`,
  };
  const [user] = useAuthState(auth);
  return (
    <>
      <div className={style.nav}>
        <div className={style.heading}>CHAT APP</div>
        {user == null && (
          <div className="signin_btn">
            <Signin />
          </div>
        )}
        {user !== null && (
          <div className="signout_btn">
            <Logout />
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
