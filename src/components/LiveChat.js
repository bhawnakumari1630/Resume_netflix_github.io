import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateId, generateImages, generateMessages, generateNames } from "./Helper";
import Live_chat_Input from "./Live_chat_Input";

function LiveChat() {
  const allChats = useSelector((store) => store.chat.messages);
  const [chatMessage, setChatMessage] = useState({});
  const dispatch = useDispatch();

  useEffect(()=>{
    const polling = setInterval(() => {
      dispatch(addMessage({ name: generateNames() , message: generateMessages(), profile: generateImages() }));
    }, 1500);

    return () => clearInterval(polling)
  },[])

  return (
    <div className="border border-slate-500 rounded-md ms-2 w-full h-[450px] pt-2 flex flex-col bg-slate-100 overflow-hidde">
      <div className="flex-1 px-2  flex flex-col-reverse overflow-y-scroll chatScrollbar ">
        {allChats &&
          allChats.map((chat) => {
            // clg
            return <ChatMessage key={generateId()} name={chat.name} message={chat.message} image={chat.profile} />;
          })}
      </div>
      <div className="relative mt-4 bg-slate-100 border-t border-slate-300 rounded-b-md">
        <Live_chat_Input />
      </div>
    </div>
  );
}

export default LiveChat;
