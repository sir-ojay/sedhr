import { useRouter } from "next/router";
import React from "react";
import Avatar from "../global/Avatar";
import Button from "../global/Button";
import { Chat } from "@/types/collaboration";

type SingleChatsProps = {
  card: Chat;
  getUserIds:any;
};
const SingleChats = ({getUserIds, card }: SingleChatsProps) => {
  const {
    query: { view },
  } = useRouter();
  return (
    <div onClick={()=>{getUserIds({
      receiverId:card?.recipientId ,
      senderId:card.senderId,
      conversationPartner:card.conversationPartner,
    });}} className={card ? "mt-4" : ""}>
      <div className={card ? "bg-[#F5FBFE]" : " "}>
        <div className="flex space-x-5 py-4 px-4">
          <Avatar
            size={48}
            name={card.conversationPartner.name}
            shape="circle"
            image={card.conversationPartner.profilePicture}
          />
          <div className="w-3/4">
            <div className="flex justify-between">
              <h4 className="font-semibold bg-light-blue flex justify-between   text-dark-900 text-base font-archivo cursor-pointer">
              {card.conversationPartner.name ||  "N/A"} 
              </h4>
              {/* <p className="font-normal text-base text-neutral-60">
                12 mins ago
              </p> */}
            </div>
            <div className="text-accents-brown mb-1 text-[15px]">
              {card.conversationPartner.accountType}
         {/* <span className=" text-neutral-80 "> Designer candidate</span> */}
            </div>
            {view !== "emails" && (
              <div className="text-sm text-dark-400 font-normal font-epilogue text-[#4C4475]">
                {card.lastMessage}
              </div>
            )}
            {view === "emails" && (
              <Button
                icon="messages"
                theme="plain"
                size="sm"
                className="w-full text-primary border border-primary"
              >
                All Chats
              </Button>
            )}
          </div>
        </div>
      </div>
      {card && <hr className="mb-5 mt-2" />}
    </div>
  );
};

export default SingleChats;
