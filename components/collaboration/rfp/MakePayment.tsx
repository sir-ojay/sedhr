import Button from "@/components/global/Button";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import { useRouter } from "next/router";
import React from "react";


const MakePayment = () => {
  const router = useRouter();

  return (
    <>
      <div className="space-y-6">
        <>
          <form className="space-y-6">
          
            <WhiteWrapper title="RFP Submission Fee">
              <div className="text-sm text-dark-100">
                 Fee for the RFP
                <div className="flex items-center justify-between">
                  <div className="text-sm text-dark-100">Description</div>
                  <div className="w py-3 px-4 border-2 border-[#B8C9C9] rounded-[5px] focus:border-primary outline-none">
                  <p>$200</p>
                  </div>
                </div>
             
              </div>
            </WhiteWrapper>
          </form>
        </>

        <div className="flex items-center justify-between">
        <Button theme="outline" onClick={()=>router.back()}>Back</Button>

          <div className="flex items-center justify-between">
            {/* <Button theme="plain" className="text-primary w-[200px]">
              Skip Step
            </Button> */}
            <Button
              onClick={() => {
                router.push({
                  pathname: "/collaboration/rfp/create",
                  query: {
                    step: "6",
                  },
                });
              }}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MakePayment;
