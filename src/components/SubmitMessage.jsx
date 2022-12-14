import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React from "react";
import { auth, db } from "./../firebase/firebase";

const SubmitMessage = () => {
  const [text, setText] = React.useState("");
  const handleForm = async (e) => {
    e.preventDefault();
    const { uid, displayName } = auth.currentUser;
    if (text === "") {
      return;
    }
    await addDoc(collection(db, "messages"), {
      text: text,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
    }).catch(() => {
      alert("An error has occurred.");
    });
    setText("");
  };
  return (
    <form
      className="w-full h-14 max-w-[728px] flex text-xl absolute bottom-0 z-10"
      onSubmit={handleForm}
    >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Send message"
        className="w-full text-xl text-black p-3 shadow-lg outline-none border-none"
      />
      <input
        type="submit"
        value="Send"
        className="min-w-[20%] text-white bg-purple-700 cursor-pointer"
      />
    </form>
  );
};

export default SubmitMessage;
