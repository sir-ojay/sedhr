import React from "react";
import WhiteWrapper from "../global/WhiteWrapper";
import SingleChats from "./SingleChats";
import Cookies from "js-cookie";
import { useGetConversationQuery } from "@/services/collaborations";
import { GetConvoResponse } from "@/types/collaboration";
import Input from "../global/Input";
import { useForm } from "react-hook-form";

type ChatsWrapperProps = {
  children: React.ReactNode;
};

const ChatsWrapper = ({ children, getUserIds }: ChatsWrapperProps & any) => {
  const token = Cookies.get("sedherToken") as string;

  let { data, isLoading } = useGetConversationQuery({
    token,
  });

  const methods = useForm({
    defaultValues: {
      searchTerm: "",
    },
    mode: "onChange",
  });

  const { watch }: any = methods;

  const searchValue = watch();
  // console.log(data);
  return (
    <div className="grid grid-cols-6 gap-8">
      <section className="col-span-2 space-y-6 ">
        <div className="sticky top-[164px]">
          <WhiteWrapper>
          <Input type="text" name="searchTerm" placeholder="Search..." />
            {data?.data?.filter((obj) => {
                if (searchValue.searchTerm) {
                  return obj?.lastMessage
                    ?.toLowerCase()
                    .includes(searchValue.searchTerm?.toLowerCase());
                }
                return true;
              })?.map((card) => (
              <SingleChats
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

export default ChatsWrapper;
