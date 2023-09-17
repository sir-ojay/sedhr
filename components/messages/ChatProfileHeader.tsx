import React from "react";
import Avatar from "../global/Avatar";
import Button from "../global/Button";
import WhiteWrapper from "../global/WhiteWrapper";
import { LoginResponse } from "@/types/auth/auth";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const ChatProfileHeader = ({ userIds }: any) => {
  const router = useRouter();

  const [user, setUser] = useState<LoginResponse>();

  useEffect(() => {
    try {
      const user = JSON.parse(Cookies.get("sedherUser") || "{}");
      setUser(user);
    } catch (error) {
      console.log(error);
    }
  }, []);

  // console.log(user);
  return (
    <WhiteWrapper>
      <div className="flex justify-between items-center ">
        <div className="flex space-x-5  justify-between">
          <Avatar
            size={48}
            name={`${user?.name}`}
            shape="circle"
            image={user?.profilePicture}
          />
          <div>
            <h4 className="font-semibold bg-light-blue flex justify-between   text-dark-900 text-base font-archivo cursor-pointer">
              {userIds?.conversationPartner?.name} {user?.name}
            </h4>
            {/* <p className="font-normal text-base text-neutral-60">
              Designer Candidates
            </p> */}
            <h5 className="text-[16px] text-accents-brown font-normal">
              {user?.accountType}
            </h5>
          </div>
        </div>
        <div>
          <div className="flex space-x-5">
            {/* <img src="/assets/icons/pin.svg" alt="pin" title="pin" /> */}
            {/* {<button onClick={()=> alert('stared')}><img src="/assets/icons/star.svg" alt="star" title="star" /></button> }  */}
            {/* <img src="/assets/icons/more.svg" alt="more" title="more" /> */}

            <Button
              onClick={() => router.push(`/profile/${user?.username}`)}
              theme="plain"
              size="sm"
              className="w-full text-primary text-[16px]"
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
