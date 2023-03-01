import React,{ useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Button from "./Button";
import { useRouter } from "next/router";
import Time from "./Time";
import { useGetSnergiQuery } from "@/services/collaborations";
import { Snergi } from "@/types/collaboration";
import Cookies from "js-cookie";

const Calendr = ({presentData, availableData}:any) => {
  const router = useRouter();
  const [snergiData, setSnergiData] = useState<Snergi>();
//   console.log(snergiData);

  const token: any = Cookies.get("sedherToken");

  const { data, isLoading, isSuccess } = useGetSnergiQuery({
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

  const [value, onChange] = useState<any>(new Date());
  const [showTime, setShowTime] = useState(false);
  const date  = (valu:Date)=>{
    valu = valu || value
  // console.log(valu);

    let year =String(valu.getFullYear())
    let month =String(valu.getMonth()+1)
    let day =String(valu.getDate())
    return year+"-"+month+"-"+day

  }
  return (
    <div className="pr-9">
      <div>
        <Calendar
          onChange={onChange}
          value={value}
          selectRange={true}
          onClickDay={() => setShowTime(true)}
        />
      </div>
      <div>
        {value.length > 0 ? (
          <p>
            <span>Start:</span>
            {/* {value[0].year()} */}
            {date(value?.[0] ) }
            &nbsp; &nbsp;
            {/* <span>End:</span>
            {value[1].toDateString()} */}
          </p>
        ) : (
          <p>
            <span>Default selected date:</span>
            {value.toDateString()}
          </p>
        )}
        <Time showTime={showTime} value={date(value[0])} presentData={presentData}  availableData={availableData} />
      </div>
      <Button
        onClick={() =>
          router.push(
            `/collaboration/sedher-synergi/${snergiData?.id}/patient-detail`
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
        className=" w-full mt-5  border text-pr border-[#DDE4F6]  	"
      >
        Back
      </Button>
    </div>
  );
};

export default Calendr;
