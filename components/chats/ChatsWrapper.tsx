import React from "react";
import WhiteWrapper from "../global/WhiteWrapper";
import SingleChats from "./SingleChats";
import Cookies from "js-cookie";
import { useGetConversationQuery } from "@/services/collaborations";
import { GetConvoResponse } from "@/types/collaboration";
type ChatsWrapperProps = {
  children: React.ReactNode;
};

const ChatsWrapper = ({ children }: ChatsWrapperProps) => {
  const token = Cookies.get("sedherToken") as string;

let  { data , isLoading } = useGetConversationQuery({
    token,
  });
  data = data as GetConvoResponse;
  console.log(data?.data);
  const EachUser = (receiverId:string,senderId:string)=>{
    console.log(window.location , receiverId);
    window.location.search = `&receiverId=${receiverId}&senderId=${senderId}`;
  }
  return (
    <div className="grid grid-cols-6 gap-8">
      <section className="col-span-2 space-y-6 ">
        <div className="sticky top-[164px]">
          <WhiteWrapper>
            {data?.data?.map((card) => (
              <SingleChats
                EachUser={EachUser}
                card={card}
                key={card.recipient._id}
              />
            ))}
          </WhiteWrapper>
        </div>
      </section>
      <section className="col-span-4  space-y-6">{children}</section>
    </div>
  );
};

export default ChatsWrapper;
