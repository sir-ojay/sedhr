import { useRouter } from "next/router";
import React from "react";
import Avatar from "../global/Avatar";
import Button from "../global/Button";

type SingelMessageProps = {
  card: Number | [];
};

const SingleMessage = ({ card }: SingelMessageProps) => {
  const {
    query: { view },
  } = useRouter();
  return (
    <div className={card === 1 ? "mt-4" : ""}>
      <div className={card === 1 ? "bg-[#F5FBFE]" : " "}>
        <div className="flex space-x-5 py-4 px-4">
          <Avatar
            size={48}
            name={"Jan Mayer"}
            shape="circle"
            image="/assets/icons/layouts/profile.png"
          />
          <div className="w-3/4">
            <div className="flex justify-between">
              <h4 className="font-semibold bg-light-blue flex justify-between   text-dark-900 text-base font-archivo cursor-pointer">
                Jan Mayer
              </h4>
              <p className="font-normal text-base text-neutral-60">
                12 mins ago
              </p>
            </div>
            <div className="text-accents-brown mb-1 text-[15px]">
              HCP <span className=" text-neutral-80 "> Dental clinics</span>
            </div>
            {view !== "emails" && (
              <div className="text-sm text-dark-400 font-normal font-epilogue text-[#4C4475]">
                We want to invite you for a qui...
              </div>
            )}
            {view === "emails" && (
              <Button
                icon="messages"
                theme="plain"
                size="sm"
                className="w-full text-primary border border-primary"
              >
                All message
              </Button>
            )}
          </div>
        </div>
      </div>
      {card != 1 && <hr className="mb-5 mt-2" />}
    </div>
  );
};

export default SingleMessage;
