import React, { useEffect } from "react";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import DefaultLayout from "@/layouts/DefaultLayout"; 
import  {useRouter } from "next/router";
import Button from "@/components/global/Button";
import {  Snergi } from "@/types/collaboration";
import Cookies from "js-cookie";
import JWT from "jsonwebtoken";
import { useCreateEventMutation} from "@/services/collaborations";
import { toast } from "react-toastify";

const successfulPayment = () => {
  const router = useRouter();
  // const backToFeed = () => router.push('/feed')
//   useEffect(()=>{
// if(!router.query.bookingData){
//   router.back()
// } 
//   },[])

  const getAuthEvent = () => router.push('https://sedher-services.lazynerdstudios.com/api/calendar-event/auth');

  const token = Cookies.get("sedherToken") as string;
  let user = JWT.decode(token) as { id: string };

  // console.log(router.query.id);
  const createSynergyEvent = async () => {
    try {
      const createSynergyEventData: any = {
        id: router.query.id?.toString()!,
        token: token as string,
        body: {
          summary: "a synergy",
          reference:"659055909d0a150bec92fed1",
       start: "2024-01-01T12:00:00",
        end: "2024-02-01T12:00:00"
      } as Snergi,
      };
      // console.log("rfp data", cancelledData);
      const resultRFP: any = await useCreateEventMutation(createSynergyEventData).unwrap();
      toast.success("Event synchronised successfully");
      console.log("result", resultRFP);
    } catch (err: any) {
      console.log("err", err);
      toast.error(err?.data?.message || err?.data?.error);
    }
  };




  return (
    <DefaultLayout title="Sedher | Booking">
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
                onClick={getAuthEvent}
              >
              createEvent
              </Button>
              {/* <Button
                type="button"
                className="w-12/12  my-5 "
                onClick={backToFeed}
              >
                Dashboard
              </Button> */}
            </div>
          </div>
        </WhiteWrapper>
      </div>
    </DefaultLayout>
  );
};

export default successfulPayment;
