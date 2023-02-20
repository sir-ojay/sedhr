import React from "react";
import Input from "../global/Input";
import WhiteWrapper from "../global/WhiteWrapper";
import SingleMessage from "./SingleMessage";
import Cookies from "js-cookie";
import { useGetConversationQuery } from "@/services/collaborations";
import { GetConvoResponse } from "@/types/collaboration";

type MessagesWrapperProps = {
  children: React.ReactNode;
};

const MessagesWrapper = ({ children, getUserIds }: MessagesWrapperProps & any) => {
  const token = Cookies.get("sedherToken") as string;

  let { data, isLoading } = useGetConversationQuery({
    token,
  });
   // console.log(data);
  return (
    <div className="grid grid-cols-6 gap-8">
      <section className="col-span-2 space-y-6 ">
        <div className="sticky top-[164px]">
          <WhiteWrapper>
            <Input type="search" placeholder="Search..." />
            {data?.data?.map((card) => (
              <SingleMessage
                getUserIds={getUserIds}
                card={card}
                key={card?.conversationPartner?._id}
              />
            ))}
          </WhiteWrapper>
        </div>
      </section>
      <section className="col-span-4  space-y-6">{children}</section>
    </div>
  );
};

export default MessagesWrapper;
