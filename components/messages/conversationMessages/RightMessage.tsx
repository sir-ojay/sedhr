import Avatar from "@/components/global/Avatar";
import React from "react";
import Timeconverter from "@/helpers/timeconverter";

const RightMessage = ({ message }: any) => {
  console.log({ contenttype: message });
  return (
    <div className="flex justify-end mb-4 space-x-6">
      <div className="max-w-sm  ">
        <h6 className="text-right font-semibold text-base py-2">You </h6>
        {message.contentType == "image" ? (
          <div>image component</div>
        ) : (
          <p className="bg-[#F8F8FD] px-4 py-3">{message?.content}</p>
        )}
        <p className="font-normal text-right py-2 text-base text-neutral-60">
          {Timeconverter(message?.timestamp)}
        </p>
      </div>
      <Avatar
        size={44}
        name={"Jan Mayer"}
        shape="circle"
        image="/assets/icons/layouts/profile.png"
      />
    </div>
  );
};

export default RightMessage;
