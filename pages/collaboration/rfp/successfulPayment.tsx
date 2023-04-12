import React, { useEffect } from "react";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import DefaultLayout from "@/layouts/DefaultLayout";
import { useRouter } from "next/router";
import Button from "@/components/global/Button";

const successfulPayment = () => {
  const router = useRouter();
  const backToFeed = () => router.push("/feed");
    useEffect(()=>{
  if(!router.query.rfpData  ){
    router.back()
  }
    },[])

  return (
    <DefaultLayout title="Sedher | RFP">
      <div className="flex justify-center h-[100%]">
        <WhiteWrapper className="text-center w-[70%] h-[100%] mt-[12px]">
          <div className=" flex flex-col items-center justify-center">
            <div>
              <img
                src="/assets/images/Group.svg"
                alt="successful-image"
                className="W-[20%]"
              />
            </div>

            <h3 className="text-lg leading-normal font-medium">
              {" "}
              Successfully approve Appointment
            </h3>
            <p className="text-[#515B6F] mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
              sapien tellus, vel imperdiet at. Molestie malesuada.
            </p>
            <div >
              <Button
                type="button"
                className="w-12/12  my-5 "
                onClick={backToFeed}
              >
                Dashboard
              </Button>
            </div>
          </div>
        </WhiteWrapper>
      </div>
    </DefaultLayout>
  );
};

export default successfulPayment;
