import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import WhiteWrapper from "../global/WhiteWrapper";
import Button from "../global/Button";

type ConnectionCardProps = {
  type: string;
  star?: boolean;
};

const ConnectionCard = ({ type, star }: ConnectionCardProps) => {
  return (
    <motion.article layout>
      <WhiteWrapper>
        <div>
          <div className="flex gap-3 mb-4">
            <div className="h-12 w-12">
              <img
                style={{
                  width:
                    type === "all" ||
                    type === "hcp" ||
                    type === "sedher" ||
                    type === "business"
                      ? "auto"
                      : "54px",
                  height:
                    type === "all" ||
                    type === "hcp" ||
                    type === "sedher" ||
                    type === "business"
                      ? "auto"
                      : "54px",
                }}
                src={
                  type === "all" ||
                  type === "hcp" ||
                  type === "sedher" ||
                  type === "business"
                    ? "/assets/icons/layouts/profile.png"
                    : "/assets/images/myTraining.png"
                }
                alt="Salami Tayo profile"
                title="Salami Tayo Profile"
              />
            </div>
            <div>
              <div className="font-semibold text-dark-900">Adewale Odewale</div>
              <div className="text-sm text-dark-400 font-normal font-epilogue text-[#4C4475]">
                Medical Doctor
              </div>
              <div className="text-sm text-accents-brown">HCP</div>
            </div>
          </div>
          <div className="text-sm text-dark-100 py-2 ">
            healthcare company rggthrt hrtbrtb htbrtbrtb grgrvr frgrg edgg dgbt
            bgbhnh
          </div>
          <div className="text-sm text-[#898E9A] pt-2 pb-4 ">
            {type === "all" || type === "hcp" ? (
              "8 mutual connnection"
            ) : (
              <div className="flex items-center justify-between">
                11,882 followers
                {star && (
                  <div className="flex items-center justify-center">
                    <img
                      src="/assets/icons/connection/star.svg"
                      alt="star"
                      title="star"
                    />
                    <h4 className="font-semibold ml-1 text-[#FFCF14] ">4.9</h4>
                  </div>
                )}
              </div>
            )}
          </div>
          <hr className="mb-5 mt-2" />

          <div className="flex items-center gap-5">
            <Button
              href="/connection/user-profile/2"
              className="w-full bg-primary "
              size="sm"
              theme="primary"
            >
              {type === "all" || type === "hcp" || type === "sedher"
                ? "Connection"
                : "Follow"}
            </Button>
          </div>
        </div>
      </WhiteWrapper>
    </motion.article>
  );
};

export default ConnectionCard;
