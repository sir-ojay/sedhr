import React from "react";
import Avatar from "@/components/global/Avatar";

const LeftUser = ({ message }: any) => {
  return (
    <div className="flex  mb-4  space-x-6">
      <Avatar
        size={44}
        name={"Jan Mayer"}
        shape="circle"
        image="/assets/icons/layouts/profile.png"
      />
      <div className="max-w-sm  ">
        <h6 className=" font-semibold text-base py-2">Jan Mayer </h6>
        <p className=" border border-[#D6DDEB] bg-white px-4 py-3">
          {message.content}
        </p>
        <p className="font-normal  py-2 text-base text-neutral-60">
          12 mins ago
        </p>
      </div>
    </div>
  );
};

export default LeftUser;
