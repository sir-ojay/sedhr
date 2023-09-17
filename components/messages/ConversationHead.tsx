import React from "react";
import Avatar from "../global/Avatar";
import { LoginResponse } from "@/types/auth/auth";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export const ConversationHead = ({ userIds }: any) => {
  const [user, setUser] = useState<LoginResponse>();

  useEffect(() => {
    try {
      const user = JSON.parse(Cookies.get("sedherUser") || "{}");
      setUser(user);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div className="flex items-center justify-center mt-[12px]">
        <div className="flex flex-col text-center justify-center content-center ">
          <div className="flex justify-center content-center ">
            <Avatar
              size={88}
              name={`${user?.name}`}
              shape="circle"
              image={user?.profilePicture}
            />
          </div>
          <div>
            <h4 className="font-semibold bg-light-blue   text-dark-900 text-[24px] font-archivo cursor-pointer">
              {userIds?.conversationPartner?.name} {user?.name}
            </h4>
            {/* <p className="font-normal text-base text-neutral-60">
              Designer candidate
            </p> */}
          <h5 className="text-[16px] text-accents-brown font-normal">{user?.accountType}</h5>

          </div>
        </div>
      </div>
      <div className="mb-5 mt-[102px] relative">
        <div className="mb-5 border mt-[102px] w-[100%] " />
        <div className=" relative top-[-44px] mx-auto rounded border border-[#D6DDEB] justify-between  py-3 px-4 flex bg-white w-28">
          <img
            src="/assets/icons/arrow-down.svg"
            alt="arrow-down"
            title="arrow-down"
          />
          Today
        </div>
      </div>
    </>
  );
};
