import { characters, messageList, nameList, profileImg } from "../utils/someData";

  export function generateId(length = 16) {
    let ID ='' ;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charLength = characters.length
    let counter = 0 ;

    while(counter < length) { 
      ID += characters.charAt(Math.floor(Math.random() * charLength ))
      counter++
    }
    // console.log(ID)
    return ID
  }
  
  export function generateNames() {
    return nameList[Math.floor(Math.random() * nameList.length)];
  };

  export function generateMessages(){
    return messageList[Math.floor(Math.random() * messageList.length)]
  }

  export function generateImages() {
    return profileImg[Math.floor(Math.random() * profileImg.length )]
  }