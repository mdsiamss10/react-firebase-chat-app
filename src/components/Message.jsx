import React from "react";
import { auth } from "./../firebase/firebase";

const style = {
  sent: `m-4 ml-auto h-auto text-start max-w-[50%] break-words rounded-lg rounded-tl-none bg-[#395dff] py-2 px-3 text-white shadow-xl`,
  rec: `m-4 mr-auto h-auto text-start max-w-[50%] break-words  rounded-lg rounded-tl-none bg-[#e5e5ea] py-2 px-3 text-black shadow-xl`,
};

const Message = ({ message }) => {
  const mClass =
    message.uid == auth.currentUser.uid ? `${style.sent}` : `${style.rec}`;
  return (
    <>
      <div className={mClass}>
        <p className="name absolute mt-[-1.6rem] text-gray-600 text-xs">
          {message.name}
        </p>
        {message.text}
      </div>
    </>
  );
};

export default Message;
