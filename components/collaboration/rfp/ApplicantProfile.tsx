import WhiteWrapper from "@/components/global/WhiteWrapper";
import { useGetUserIdQuery } from "@/services/profile";
import { User } from "@/types/profile";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import JWT from "jsonwebtoken";
import { useRouter } from "next/router";

const ApplicantProfile = ({ control }: any) => {
  const router = useRouter();
  const token = Cookies.get("sedherToken") as string;
  let user = JWT.decode(token) as { id: string };

  const [userData, getUserData] = useState<User>();
  const { data, isSuccess } = useGetUserIdQuery({
    token,
    userId: router.query.id?.toString()!,
  });

  useEffect(() => {
    data && getUserData(data?.data);
  }, [isSuccess, data]);
  // console.log(userData);
  return (
    <WhiteWrapper>
      <div className="flex gap-4 text-[#7C8493]">
        <button
          className="hover:text-[#25324B] py-3 hover:border-[#4640DE] hover:border-b-2 active:border-[#4640DE]  focus:outline-none focus:border-[ #4640DE]  "
          onClick={control}
        >
          Applicant Profile
        </button>
        <button onClick={control}>Attachments</button>
      </div>
      <hr />

      <h5 className="text-lg text-[#25324B] font-semibold mt-2">
        Personal Info
      </h5>

      <div className="flex gap-4 text-base mt-5">
        <div>
          <h5 className="text-[#7C8493] ">Business Name</h5>
          <p className="text-[#25324B] font-medium">{userData?.name}</p>
        </div>
        {/* <div>
          <h5 className="text-[#7C8493]">Country</h5>
          <p className="text-[#25324B] font-medium">Nigeira</p>
        </div> */}
      </div>
      <div className="flex gap-4 text-base my-5">
        {/* <div>
          <h5 className="text-[#7C8493]">Business Establishment</h5>
          <p className="text-[#25324B] font-medium ">March 23, 1995 (26 y.o)</p>
        </div> */}
        <div>
          <h5 className="text-[#7C8493]">Speciality</h5>
          <p className="text-[#25324B] font-medium">
            {/* {userData?.experiences[0]?.title} */}
          </p>
        </div>
      </div>

      {/* <div className="my-5">
        <h5 className="text-[#7C8493]">Address</h5>
        <p className="text-[#25324B] font-medium">
          4517 Washington Ave. Lagos, <br />
          Nigeria 39495
        </p>
      </div> */}

      <hr />

      <div className="mt-5">
        <h5 className="text-[#25324B] font-semibold">Professional Info</h5>
        <p className="text-[#7C8493]">About US</p>
        <p className="text-[#25324B] font-medium">{userData?.about}</p>
      </div>

      {/* <div className="flex gap-4 text-base mt-5">
        <div>
          <h5 className="text-[#25324B] ">Bid Experience</h5>
          <p className="text-[#25324B] font-medium">2years</p>
        </div>
        <div>
          <h5 className="text-[#25324B] ">Projected Executed</h5>
          <p className="text-[#25324B] font-medium">4 Projects</p>
        </div>
      </div> */}
    </WhiteWrapper>
  );
};

export default ApplicantProfile;
