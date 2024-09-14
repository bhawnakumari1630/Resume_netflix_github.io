import React, { useState } from "react";
import InputEmoji from "react-input-emoji";
import { useDispatch } from "react-redux";
import { addMessage } from "../utils/chatSlice";

const myProfile =
  "https://s3-ap-southeast-1.amazonaws.com/images.brajrasik.org/656081539867270008d15347.jpeg";

function Live_chat_Input() {
  const [chatMessage, setChatMessage] = useState("");
  const dispatch = useDispatch();

  function sendChatMessage() {
    if (chatMessage.trim()?.length) {
      dispatch(
        addMessage({
          name: "radhika NS",
          message: chatMessage.trim(),
          profile: myProfile, 
        })
      );
      setChatMessage("");
    }
  }

  return (
    <div className="flex me-2 pt-1">
      <InputEmoji
        value={chatMessage}
        onChange={setChatMessage}
        // cleanOnEnter
        // onEnter={sendChatMessage}
        placeholder="Type a message"
        onKeyDown={e => (e.key === 'Enter') && sendChatMessage() }
      />
      <button
        onClick={sendChatMessage}
        className="my-2 rounded-md text-white bg-emerald-500 py-1 px-6 hover:ring ring-blue-200"
      >
        Send
      </button>
    </div>
  );
}

// another input field

// <>
//   <form onSubmit={(e) => sendChatMessage(e)} className="flex me-2 pt-1">
//     <input
//       type="text"
//       value={chatMessage}
//       onChange={(e) => setChatMessage(e.target.value)}
//       placeholder="type a message..."
//     />
//     <button
//       onClick={sendChatMessage}
//       className="my-2 rounded-md text-white bg-emerald-500 py-1 px-6 hover:ring ring-blue-200"
//     >
//       Send
//     </button>
//   </form>
// </>

export default Live_chat_Input;
