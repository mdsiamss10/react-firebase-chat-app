import React from "react";
import { auth } from "./../firebase/firebase";

const style = {
  sent: `message ml-auto flex max-w-[50%] items-center shadow-xl m-4 py-2 px-3 bg-[#395dff] text-white rounded-lg rounded-br-lg`,
  rec: `message flex max-w-[50%] items-center shadow-xl m-4 py-2 px-3 bg-[#e5e5ea] text-black rounded-lg rounded-br-lg`,
};

const Message = ({ message }) => {
  const mClass =
    message.uid == auth.currentUser.uid ? `${style.sent}` : `${style.rec}`;
  return (
    <>
      <div className={mClass} style={{ width: "max-content" }}>
        <p className="name mt-[-4rem] text-gray-600 text-xs">{message.name}</p>
        <span>{message.text}</span>
      </div>
    </>
  );
};

export default Message;
