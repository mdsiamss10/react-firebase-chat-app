import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Chat from "./components/Chat";
import Navbar from "./components/Navbar";
import SubmitMessage from "./components/SubmitMessage";
import { auth } from "./firebase/firebase";

const style = {
  appContainer: `max-w-[728px] mx-auto text-center px-5`,
  sectionContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 rounded-lg shadow-xl border relative`,
};

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className={style.appContainer}>
      <div className={style.sectionContainer}>
        <Navbar />
        {user !== null && (
          <>
            <Chat />
            <SubmitMessage />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
