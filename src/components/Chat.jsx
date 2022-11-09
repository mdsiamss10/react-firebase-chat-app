import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import Message from "./Message";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (e) => {
      let messages = [];
      e.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);
  return (
    <>
      <main className="main flex flex-col p-[10px] relative overflow-scroll mb-10">
        {messages && messages.map((e) => <Message key={e.id} message={e} />)}
      </main>
    </>
  );
};

export default Chat;
