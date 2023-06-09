import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Button from "./Button";
import { useRouter } from "next/router";
import Time from "./Time";
import { useGetSnergiQuery } from "@/services/collaborations";
import { Snergi } from "@/types/collaboration";
import Cookies from "js-cookie";

const Calendr = ({ presentData, availableData }: any) => {
  // Synergi functions to get the unique id
  const router = useRouter();
  const [snergiData, setSnergiData] = useState<Snergi>();
  //   console.log(snergiData);

  const token: any = Cookies.get("sedherToken");

  const { data, isSuccess } = useGetSnergiQuery({
    token,
    id: router.query.id?.toString()!,
  });

  useEffect(() => {
    // console.log(data);
    // @ts-ignore: Unreachable code error
    data && setSnergiData(data?.data);
  }, [isSuccess, data]);

  const handleClick = () => {
    router.back();
  };

  // Booking functions

  const [value, onChange] = useState<any>(new Date());
  const [showTime, setShowTime] = useState(false);
  const date = (valu: Date) => {
    valu = valu || value;
    // console.log(valu);

    let year = String(valu.getFullYear());
    let month = String(valu.getMonth() + 1);
    let day = String(valu.getDate());
    return year + "-" + month + "-" + day;
  };
  return (
    <div className="pr-9">
      <div>
        <Calendar
          onChange={onChange}
          value={value}
          // selectRange={true}
          onClickDay={() => setShowTime(true)}
        />
      </div>
      <div>
        {value.length > 0 ? (
          <p>
            <span>Start:</span>
            {/* {value[0].year()} */}
            {date(value?.[0])}
            &nbsp; &nbsp;
            {/* <span>End:</span>
            {value[1].toDateString()} */}
          </p>
        ) : (
          <p className="text-current text-lg mt-2">
            <span>Default selected date:</span>
            {value.toDateString()}
          </p>
        )}
        <Time showTime={showTime} value={date(value[0])} />
      </div>
      <Button
        onClick={() =>
          router.push(
            router.asPath ===
              `/collaboration/sedher-synergi/${snergiData?.id}/book-appointment`
              ? `/collaboration/sedher-synergi/${snergiData?.id}/patient-detail`
              : `/collaboration/sedher-synergi/${snergiData?.id}/edit-patient-details`
          )
        }
        size="sm"
        className="w-full mt-5  text-primary text-[16px]"
      >
        Continue Booking
      </Button>
      <Button
        onClick={handleClick}
        theme="outline"
        size="sm"
        className="w-full mt-5  border text-pr border-[#DDE4F6]"
      >
        Back
      </Button>
    </div>
  );
};

export default Calendr;
