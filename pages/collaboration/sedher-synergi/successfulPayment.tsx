import React, { useEffect } from "react";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import DefaultLayout from "@/layouts/DefaultLayout"; 
import  { useRouter } from "next/router";

const successfulPayment = () => {
  const router = useRouter();
  useEffect(()=>{
if(!router.query.bookingData){
  router.back()
} 
  },[])

  return (
    <DefaultLayout title="Sedher | Finances">
      <div className="flex justify-center">
        <WhiteWrapper className="text-center w-[70%] h-[287px] flex flex-col items-center justify-center mt-[12px]">
          <div className="h-[141px] w-[125px]">
            <img
              src="/assets/images/Group.svg"
              alt="successful-image"
              className="W-[100%]"
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
        </WhiteWrapper>
      </div>
    </DefaultLayout>
  );
};

export default successfulPayment;
