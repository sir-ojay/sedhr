import Button from "@/components/global/Button";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import { useRouter } from "next/router";
import React from "react";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import JWT from "jsonwebtoken";
import { RFP } from "@/types/collaboration";
import moment from "moment";
import { useGetRFPQuery } from "@/services/collaborations";

const ApplyRFPView = () => {
  const router = useRouter();
  // console.log(rfpDetails);
  // Payment functions
  const [synergi, setSynergi] = useState<any>();
  // console.log(synergi);

  const [rfpData, setRfpData] = useState<RFP>();
  // console.log(rfpData);

  const token = Cookies.get("sedherToken") as string;
  let user = JWT.decode(token) as { id: string };
  // console.log(user?.id
  // Get booking functions

  useEffect(() => {
    if (rfpData) {
      const userSynergi = [...(rfpData as unknown as Array<any>)].pop();
      // .reverse()
      // .find((data: any) => {
      //   console.log(data.synergy.owner, user.id);
      //   return data.synergy.owner == user.id;

      // });

      setSynergi(userSynergi);
      // setSynergi(bookingData);
      console.log(userSynergi);
    }
  }, [rfpData]);

  console.log(synergi?.code);

  const { data, isSuccess } = useGetRFPQuery({
    token,
    userId: router.query.id?.toString()!,
  });
  useEffect(() => {
    data && setRfpData(data?.data);
  }, [isSuccess, data]);

  const downloadImage = (imageUrl: any) => {
    fetch(imageUrl, {
      headers: {
        "Content-Type": "image/jpeg",
      },
    })
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "image.jpg");
        document.body.appendChild(link);
        link.click();
        // link.parentNode.removeChild(link);
      })
      .catch((error) => {
        console.error("Error occurred while downloading the image", error);
      });
  };

  return (
    <div>
      <div className="space-y-6">
        <WhiteWrapper title="RFPCode">
          <div className="flex justify-between">
            <div>
              <div className="text- font-semibold text-black mb-3">
                Copy Reference Code for this project
              </div>
              <Button className="bg-[#DFDFDF] text-[#808080]">
                CopyRFQCode
              </Button>
            </div>
            <div className="w border-2 border-[#B8C9C9] rounded-[5px] focus:border-primary outline-none">
              <p className="pt-7 px-4 ">{synergi?.code ===" "?'000000': synergi?.code}</p>
            </div>
          </div>
        </WhiteWrapper>
        <WhiteWrapper>
          <div>
            <div className="flex items-center justify-between py-3.5 ">
              <div className="text-base font-semibold text-black">
                RFP Summary
              </div>
              {/* <div className="text-[#3772FF] font-bold text-base ">Modify</div> */}
            </div>
            <hr />
            <div className="flex items-center justify-between py-3.5">
              <div className="text- font-semibold text-black">Project Name</div>
              <div className="text-sm font-normal text-[#0C1938]">
                {synergi?.productName}
              </div>
            </div>
            <hr />
            <div className="flex items-center justify-between py-3.5 ">
              <div className="text- font-semibold text-black">
                Project Category
              </div>
              <div className="text-sm font-normal text-[#0C1938]">
                {synergi?.category}
              </div>
            </div>
            <hr />
            <div className="flex items-center justify-between py-3.5 ">
              <div className="text- font-semibold text-black w-1/2">
                Project Description
              </div>
              <div className="text-sm font-normal text-[#0C1938] w-5/6">
                {synergi?.scopeOfWork}
              </div>
            </div>
          </div>
        </WhiteWrapper>

        <WhiteWrapper>
        <div className="flex items-center justify-between py-3.5 ">
              {" "}
              <div className="text-base font-semibold text-black">
                Specifications
              </div>
            </div>
            <hr />
            <div className="flex items-center justify-between py-3.5 ">
              <div className="text-base font-semibold text-black w-1/2">
              {synergi?.additionalDetails[0].fieldName}
              </div>
              <div className="text-sm font-normal text-[#0C1938] w-5/6">
                {" "}
                {synergi?.additionalDetails[0].value}
              </div>
            </div>
            <hr />
            <div className="flex items-center justify-between py-3.5 ">
              <div className="text-base font-semibold text-black w-1/2">
              {synergi?.additionalDetails[1].fieldName}
              </div>
              <div className="text-sm font-normal text-[#0C1938] w-5/6">
                {" "}
                {synergi?.additionalDetails[1].value}
              </div>
            </div>
            <hr />
            <div className="flex items-center justify-between py-3.5 ">
              <div className="text-base font-semibold text-black">
              {synergi?.additionalDetails[2].fieldName}
              </div>
              <div className="text-sm font-normal text-[#0C1938]">
                <button onClick={() => downloadImage(synergi?.additionalDetails[2].value)}>
                Download Document
              </button>
              </div>
            </div>

        </WhiteWrapper>

        <WhiteWrapper>
          <div>
            <div className="flex items-center justify-between py-3.5 ">
              {" "}
              <div className="text-base font-semibold text-black">
                Bid Selection & Timeline
              </div>
              {/* <div className="text-[#3772FF] font-bold text-base ">Modify</div> */}
            </div>
            <hr />
            <div className="flex items-center justify-between py-3.5 ">
              <div className="text-base font-semibold text-black">
                {" "}
                Deadline for Bids
              </div>
              <div className="text-sm font-normal text-[#0C1938]">
                {" "}
                {moment(synergi?.bids?.deadline).format("DD, MMMM YYYY")}
              </div>
            </div>
            <hr />
            <div className="flex items-center justify-between py-3.5 ">
              <div className="text-base font-semibold text-black">
                Selection of Bidder & Contract Award
              </div>
              <div className="text-sm font-normal text-[#0C1938]">
                {" "}
                {moment(synergi?.bids?.selectionDate).format("DD, MMMM YYYY")}
              </div>
            </div>
            <hr />
            <div className="flex items-center justify-between py-3.5 ">
              <div className="text-base font-semibold text-black w-1/2">Side Note</div>
              <div className="text-sm font-normal text-[#0C1938] w-5/6">
                {synergi?.bids?.note}
              </div>
            </div>
          </div>
        </WhiteWrapper>

        <WhiteWrapper>
          <div>
            <div className="flex items-center justify-between py-3.5 ">
              <div className="text-base font-semibold text-black">
                Selection Criteria
              </div>
              {/* <div className="text-[#3772FF] font-bold text-base ">Modifiy</div> */}
            </div>
            <hr />
            <div className="flex items-center justify-between py-3.5 ">
              <div className="text-base font-semibold text-black w-1/2">
                Chanels of communication
              </div>
              <div className="text-sm font-normal text-[#0C1938] w-5/6">
                {synergi?.selectionCriteria}
              </div>
            </div>
          </div>
        </WhiteWrapper>

        <WhiteWrapper>
          <div>
            <div className="flex items-center justify-between py-3.5 ">
              <div className="text-base font-semibold text-black">
                RFP Budget
              </div>
              {/* <div className="text-[#3772FF] font-bold text-base ">Modifiy</div> */}
            </div>
            <hr />
            <div className="flex items-center justify-between py-3.5 ">
              <div className="text-base font-semibold text-black">
                Chanels of communication
              </div>
              <div className="text-sm font-normal text-[#0C1938]">{`N${synergi?.budgets[0]?.value}`}</div>
            </div>
          </div>
        </WhiteWrapper>

        <div className="flex items-center justify-between">
          <Button theme="outline" onClick={() => router.back()}>
            Back
          </Button>

          <div className="flex items-center justify-between">
            <Button
              onClick={() =>
                router.push({
                  pathname: `/collaboration/rfp/${synergi?.userId}/apply-for-rfp`,
                  query: {
                    step: "2",
                  },
                })
              }
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyRFPView;
