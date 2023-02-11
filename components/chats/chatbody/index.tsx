import React from "react";
import RightUser from "./RightUser";
import LeftUser from "./LeftUser";
import { GetChatResponse } from "@/types/collaboration";


const index = ({ data, user:sender,userIds }: any) => {
  return (
    <div>
      {data && (
        <div>
          {data?.map((message:any, key:number) => {
            console.log(message?.sender?.username )
            return message?.sender?.username == sender.username ? (
              <RightUser key={key} message={message} />
            ) : (
              <LeftUser userIds={userIds} key={key} message={message} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default index;
