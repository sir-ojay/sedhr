import React, { useCallback, useEffect, useState } from "react";
import WhiteWrapper from "../global/WhiteWrapper";
import ChatBottom from "./ChatBottom";
import ChatHeader from "./ChatHeader";
import ChatBody from "./chatbody";
import { useGetMessageQuery } from "@/services/collaborations";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { ZIM } from 'zego-zim-web';
import { appID,generateToken } from "@/helpers/zegoToken";
import JWT from "jsonwebtoken"


ZIM.create({ appID });
let  zim = ZIM.getInstance();

const ChatSection = ({userIds}:any) => {

const [toksen,setToken] = useState<string>("")

  const token = Cookies.get("sedherToken") as string;
  let {id} = JWT.decode(token) as {id:string}

let  user: any = JSON.parse(Cookies.get("sedherUser") as string)
 const zegoToken = generateToken(id,7200)
 
  const newUserDetails = { userName:user.username, userID: id }

  const handleLogin = () => {
    try {
      setToken(zegoToken)
        zim.login(newUserDetails, zegoToken)
    } catch (error) {
    }
}


  let { data } = useGetMessageQuery({
    token, 
    receiverId: userIds.receiverId,
    senderId: userIds.senderId,
  });
  const [messages, setMessage] = useState<any[]>([])
  useEffect(()=>{
    if(data?.data){ 
      setMessage([...data?.data].reverse())
    }
  },[data?.data])
  const memoizedCallback = useCallback(
    () => {
      handleLogin()
    },
    [],
   );
  
  useEffect(() => {
    zim.on('error', function (zim:any, errorInfo:any) {
    });

//     // Set up and listen for the callback for connection status changes.
    zim.on('connectionStateChanged', function (zim, { state, event, extendedData }) {
        if (state === 0 && event === 3) {
            zim.login(newUserDetails, token)
          }
    });

//     // Set up and listen for the callback for receiving one-to-one messages. 
    zim.on('receivePeerMessage', function (zim, { messageList, fromConversationID }) {
          let response= {
            content :messageList[0].message,
            id:messageList[0].senderUserID,
            sender:{id:messageList[0].senderUserID
            },
            profilePicture:"none",
            username:"none",
           } 
    setMessage((previousMessages:any[])=>[...previousMessages,response])
    });

//     // Set up and listen for the callback for token expires.
    zim.on('tokenWillExpire', function (zim:any, { second }:{second:Number}) {
        zim.renewToken( zegoToken)
    });
    memoizedCallback()
}, [])
if(Object.keys(userIds).length===0)
return (<>
<h1> Select A chat</h1> 
</>)

 return (
    <WhiteWrapper>
      <ChatHeader />
      <ChatBody user={user} data={messages} />
      <ChatBottom chatController={zim} userIds={userIds}/>
    </WhiteWrapper>
  );
};
 
export default ChatSection 