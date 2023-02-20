import Avatar from "@/components/global/Avatar";
import React from "react";
import Timeconverter from "@/helpers/timeconverter";

const LeftMessage = ({ message, userIds }: any) => {
  return (
    <div className="flex  mb-4  space-x-6">
      <Avatar
        size={44}
        name={"Jan Mayer"}
        shape="circle"
        image={userIds?.conversationPartner?.profilePicture}
      />
      <div className="max-w-sm  ">
        <h6 className=" font-semibold text-base py-2">Jan Mayer </h6>
        {message.contentType == "image" ? (
          <div>image component</div>
        ) : (
          <p className="bg-[#F8F8FD] px-4 py-3">{message?.content}</p>
        )}
        <p className="font-normal text-right py-2 text-base text-neutral-60">
          {Timeconverter(message?.timestamp)}
        </p>
      </div>
    </div>
  );
};

export default LeftMessage;
