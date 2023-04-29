import Avatar from "@/components/global/Avatar";
import Button from "@/components/global/Button";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import { RFP } from "@/types/collaboration";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import JWT from "jsonwebtoken";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  useGetRFPApplicationQuery,
  useUpdateRFPApplicationMutation,
} from "@/services/collaborations";

const VendorInfo = () => {
  const router = useRouter();
  const token = Cookies.get("sedherToken") as string;
  let user = JWT.decode(token) as { id: string };

  const [rfpData, setRfpData] = useState<RFP>();

  const { data, isSuccess } = useGetRFPApplicationQuery({
    token,
    id: router.query.id?.toString()!,
  });
  useEffect(() => {
    data && setRfpData(data?.data);
  }, [isSuccess, data]);
  console.log(rfpData?.createdAt);

  const [updateRFP, { isLoading }] = useUpdateRFPApplicationMutation();

  const approveRFP = async () => {
    try {
      const approvedData = {
        id: router.query.id?.toString()!,
        token: token as string,
        body: {
          status: "accepted",
        } as RFP,
      };
      console.log("rfp data", approvedData);
      const resultRFP = await updateRFP(approvedData).unwrap();
      toast.success("RFP approved successfully");
      console.log("result", resultRFP);
    } catch (err: any) {
      console.log("err", err);
      toast.error(err?.data?.message || err.data.error);
    }
  };
  return (
    <>
      <WhiteWrapper>
        <div className="flex gap-4">
          <div className="flex justify-center content-center">
            <Avatar
              size={88}
              name={"Jan Mayer"}
              shape="circle"
              //   image={userIds?.conversationPartner?.profilePicture}
            />
          </div>
          <div>
            <h5 className="pt-4">Vendor Name</h5>
            <p className="text-[#7C8493]">08185548889</p>
          </div>
        </div>
        <div className="my-5 bg-[#F8F8FD] p-4">
          <div className="flex gap-8 text-sm pb-2">
            <p className="text-[#25324B]">Applied RFP</p>
            <p className="text-[#7C8493]">
              {moment(rfpData?.createdAt).format("DD, MMMM YYYY")}
            </p>
          </div>

          <hr />

          <h5 className="text-base pt-2">Lagos, Nigeria</h5>
          <p className="text-[#515B6F] text-sm">Technology</p>
        </div>

        <Button
          onClick={() => approveRFP()}
          theme="outline"
          size="sm"
          className="w-[234px]"
        >
          Approve Proposal
        </Button>

        <hr className="mt-5" />
        <div>
          <h5 className="font-clash font-semibold text-2xl text-dark-900 mt-3">
            Contact
          </h5>
          <div className="mt-2">
            <div className="flex gap-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
                  stroke="#616A6A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 7L12 13L21 7"
                  stroke="#616A6A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="font-epilogue">
                <div className="text-[#7C8493] text-base">Email</div>
                <div className="text-[#25324B]">mddyudbh@gmail.com</div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-4 mt-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_4215_32166)">
                  <path
                    d="M16 4H8C7.44772 4 7 4.44772 7 5V19C7 19.5523 7.44772 20 8 20H16C16.5523 20 17 19.5523 17 19V5C17 4.44772 16.5523 4 16 4Z"
                    stroke="#4C4475"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11 5H13"
                    stroke="#4C4475"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 17V17.01"
                    stroke="#2A2069"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4215_32166">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div className="font-epilogue ">
                <div className="text-[#7C8493] text-base">Phone</div>
                <div className="text-[#25324B]">09077689900</div>
              </div>
            </div>
          </div>
        </div>
      </WhiteWrapper>
    </>
  );
};

export default VendorInfo;
