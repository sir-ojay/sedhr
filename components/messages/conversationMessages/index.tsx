import React from "react";
import LeftMessage from "./LeftMessage";
import RightMessage from "./RightMessage";
import { GetChatResponse } from "@/types/collaboration";

const ConversationMessage = ({
  data,
  user:sender,
  userIds,
  timeconverter,
}: any) => {
  return (
    <div>
      {data && (
        <div>
          {data?.map((message: any, key: number) => {
            console.log(message?.sender?.username);
            return message?.sender?.username == sender.username ? (
              <RightMessage key={key} message={message} />
            ) : (
              <LeftMessage userIds={userIds} key={key} message={message} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ConversationMessage;
