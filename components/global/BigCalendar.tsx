import { Calendar, momentLocalizer } from "react-big-calendar";
import { useRouter } from "next/router";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState, useEffect } from "react";
import { useGetAvailabilityQuery } from "@/services/collaborations";
import { Available } from "@/types/collaboration";
import Cookies from "js-cookie";

const BigCalendar = (props: any) => {
  const [value, onChange] = useState<any>(new Date());
  const router = useRouter();
  const [availableData, setAvailableData] = useState<any>([]);
  // console.log(availableData);

  const token: any = Cookies.get("sedherToken");

  const { data, isSuccess } = useGetAvailabilityQuery({
    token,
    time: value,
    id: router.query.id?.toString()!,
  });

  useEffect(() => {
    // @ts-ignore: Unreachable code error
    // console.log(data?.data.spots)
    // let bookinds = data.data.spots.map((spot)=>{
    //   return {
    //     // startT
    //     title: spot.status,
    //     start: spot.startTime,
    //     end: spot.startTime,
    //   }
    // })
    data &&
      setAvailableData(
        data?.data?.spots.map((spot) => {
          return {
            // startT
            title: spot.status,
            start: new Date(spot.startTime),
            end: new Date(new Date(spot.startTime).getTime() + 30 * 60 * 1000),
          };
        })
      );
  }, [isSuccess, data]);

  const handleClick = () => {
    router.back();
  };

  console.log(availableData);

  const localizer = momentLocalizer(moment);
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={availableData}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default BigCalendar;
