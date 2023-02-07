import React from "react";
import WhiteWrapper from "../global/WhiteWrapper";
import ChatBottom from "./ChatBottom";
import ChatHeader from "./ChatHeader";
import ChatBody from "./chatbody";
import { useGetMessageQuery } from "@/services/collaborations";
import Cookies from "js-cookie";
import { useRouter } from "next/router";


const ChatSection = () => {
  const token = Cookies.get("sedherToken") as string;

  const user: any = Cookies.get("sedherUser") as string;

  const router = useRouter();
  
  const { data } = useGetMessageQuery({
    token,
    receiverId: router.query.receiverId?.toString()!,
    senderId: router.query.senderId?.toString()!,
  });
  console.log(router.query);
  return (
    <WhiteWrapper>
      <ChatHeader />
      <ChatBody user={user} data={data?.data} />
      <ChatBottom />
    </WhiteWrapper>
  );
};

export default ChatSection;
