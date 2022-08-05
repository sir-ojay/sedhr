import React from "react";
import Avatar from "../global/Avatar";
import Button from "../global/Button";
import WhiteWrapper from "../global/WhiteWrapper";

const ChatProfileHeader = () => {
  return (
    <WhiteWrapper>
      <div className="flex space-x-5 py-4 px-4">
        <Avatar
          size={48}
          name={"Jan Mayer"}
          shape="circle"
          image="/assets/icons/layouts/profile.png"
        />
        <div className="flex justify-between items-center">
          <div className="w-[200px]">
            <h4 className="font-semibold bg-light-blue flex justify-between   text-dark-900 text-base font-archivo cursor-pointer">
              Jan Mayer
            </h4>
            <p className="font-normal text-base text-neutral-60">
              Designer Candidates
            </p>
            <h5 className="text-[16px] text-accents-brown font-normal">HCP</h5>
          </div>
          <div className="flex space-x-5">
            <img src="/assets/icons/pin.svg" alt="pin" title="pin" />
            <img src="/assets/icons/star.svg" alt="star" title="star" />
            <img src="/assets/icons/more.svg" alt="more" title="more" />

            <Button
              href="/connection/user-profile/2"
              theme="plain"
              size="sm"
              className="w-full text-primary text-sm"
            >
              View Profile
            </Button>
          </div>
        </div>
      </div>
    </WhiteWrapper>
  );
};

export default ChatProfileHeader;
