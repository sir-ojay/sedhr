import WhiteWrapper from "@/components/global/WhiteWrapper";
import { useGetRFPApplicationQuery } from "@/services/collaborations";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import JWT from "jsonwebtoken";
import { RFP } from "@/types/collaboration";

const Attachment = ({ control }: any) => {
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
  console.log(rfpData);

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
    <WhiteWrapper>
      <div className="flex gap-4  py-3 text-[#7C8493]">
        <button onClick={control}>Applicant Profile</button>
        <button
          className="py-3 hover:text-[#25324B]  hover:border-[#4640DE] hover:border-b-2 active:border-[#4640DE]  focus:outline-none focus:border-[ #4640DE]  "
          onClick={control}
        >
          Attachments
        </button>
      </div>
      <hr />

      {rfpData?.documentLinks.map((doc: any) => (
        <div key={doc.id}>
          <h5 className="text-[#7C8493] text-sm font-normal py-2">
            {doc?.fieldName}
          </h5>
          <div className="flex justify-between p-3 border-solid border-[#D6DDEB] border-2   focus:border-primary outline-none">
            <div>
              <h5 className="text-[#25324B] font-semibold text-base">
                {doc?.fieldName}
              </h5>
            </div>
            <div className="border-solid border-[#D6DDEB] border-2 p-2  focus:border-primary outline-none">
              <button onClick={() => downloadImage(doc?.value)}>
                Download Image
              </button>
            </div>
          </div>
        </div>
      ))}
    </WhiteWrapper>
  );
};

export default Attachment;
