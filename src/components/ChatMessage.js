import React from "react";
function ChatMessage({ name, message, image }) {
  return (
    <div className="my-1 flex gap-2 items-cente py-1 px-2 rounded-md border-b ">
      <img
        src={image}
        alt=""
        className="w-8 h-8 rounded-full object-cover "
      />
      <p className="lin px-2 text-sm ">
        <span className="font-bold pe-2 ">{name}</span>
        {message} 
      </p>
    </div>
  );
}

export default ChatMessage;
