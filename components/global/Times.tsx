import React, { useEffect, useState } from "react";
import "react-calendar/dist/Calendar.css";
import { useRouter } from "next/router";
import { useGetAvailabilityQuery } from "@/services/collaborations";
import { Available } from "@/types/collaboration";
import Cookies from "js-cookie";
import moment from "moment";

const Times = ({ value }: any) => {
  const router = useRouter();
  const [availableData, setAvailableData] = useState<Available>();
  // console.log(availableData);

  const token: any = Cookies.get("sedherToken");

  const { data, isSuccess } = useGetAvailabilityQuery({
    token,
    time: value,
    id: router.query.id?.toString()!,
  });

  useEffect(() => {
    // @ts-ignore: Unreachable code error
    data && setAvailableData(data?.data);
  }, [isSuccess, data]);

  const handleClick = () => {
    router.back();
  };

  // const time = ['08:00','09:00','10:00','14:00','15:00'];

  const [event, setEvent] = useState(null);
  const [info, setInfo] = useState(false);
  const route = useRouter();

  function displayInfo(e: any) {
    setInfo(!info);
    setEvent(e);
    // console.log(value, e);
    // localStorage.setItem("",[e.target.innerText])
    let appointment = {
      dateSlot: value,
      selectedSlots: [e],
      communicationChannels: ["valid", "communication", "channels"],
    };
    localStorage.setItem("appointment", JSON.stringify(appointment));
  }
  return (
    <>
      <div className="w-full mt-1  text-[18px] w-[90%]">
        {info
          ? `Your appointment is set to time - ${moment(event).format(
              "HH:MM"
            )} on  ${moment(value).format(
              "DD, MMMM YYYY"
            )}, scroll down, click the button to continue booking.`
          : null}
      </div>
      <div className="times ">
        {availableData?.spots &&
          availableData?.spots?.map((slots) => {
            // console.log({slots})
            return (
              <button
                className=" w-1/4 max-[650px]:w-1/2"
                onClick={(e) => displayInfo(slots.startTime)}
              >
                <div className="mt-2 mr-3 p-5 min-w-min  text-primary text-[16px] border  border-[#DDE4F6] rounded-md hover:border-[#26A4FF] ">
                  <p>
                    {moment(slots.startTime).format("HH:mm")} - {slots.status}
                  </p>
                </div>
              </button>
            );
          })}
      </div>
    </>
  );
};

export default Times;
