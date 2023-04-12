import WhiteWrapper from "@/components/global/WhiteWrapper";
import React from "react";

const Attachment = ({control}:any) => {
  return (
    <WhiteWrapper>
       <div className="flex gap-4  py-3 text-[#7C8493]">
        <button  onClick={control} >Applicant Profile</button>
        <button className="py-3 hover:text-[#25324B]  hover:border-[#4640DE] hover:border-b-2 active:border-[#4640DE]  focus:outline-none focus:border-[ #4640DE]  "  onClick={control}>Attachments</button>
      </div>
      <hr />
      

      <div>
        <h5 className="text-[#7C8493] text-sm font-normal py-2">RFP Form</h5>
        <div className="flex justify-between p-3 border-solid border-[#D6DDEB] border-2   focus:border-primary outline-none">
          <div>
            <h5 className="text-[#25324B] font-semibold text-base">Reform.pdf</h5>
            <p className="text-[#7C8493] text-sm font-normal">1.2mb</p>
          </div>
          <div className="border-solid border-[#D6DDEB] border-2 p-2  focus:border-primary outline-none">
            <p className="text-[#4640DE] text-base font-bold">Download Attachment</p>
          </div>
        </div>
      </div>
    </WhiteWrapper>
  );
};

export default Attachment;
