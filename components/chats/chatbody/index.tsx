import React from "react";
import RightUser from "./RightUser";
import LeftUser from "./LeftUser";
import { GetChatResponse } from "@/types/collaboration";


const index = ({ data, user }: any) => {
  let sender = user && JSON.parse(user);

   
  return (
    <div>
      {data && (
        <div>
          {data?.map((message, key) => {
            console.log(message.timestamp); 
            return message.sender.username == sender.username ? (
              <RightUser key={key} message={message} />
            ) : (
              <LeftUser key={key} message={message} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default index;
