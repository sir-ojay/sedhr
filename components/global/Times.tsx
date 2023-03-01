import React,{ useEffect, useState } from "react";
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import { useRouter } from 'next/router';
import { useGetAvailabilityQuery} from "@/services/collaborations";
import { Available } from "@/types/collaboration";
import Cookies from "js-cookie";


const Times = ({value}:any) => {
  const router = useRouter();
  const [availableData, setAvailableData] = useState<Available>();
  console.log(availableData);

  const token: any = Cookies.get("sedherToken");

  const { data, isLoading, isSuccess } = useGetAvailabilityQuery({
    token,
    time:value,
    id: router.query.id?.toString()!,
  });

  useEffect(() => {
    // @ts-ignore: Unreachable code error
    data && setAvailableData(data?.data);
  }, [isSuccess, data]);

  const handleClick = () => {
    router.back();
  };

    const time = ['08:00','09:00','10:00','14:00','15:00'];
    {}

    const [event, setEvent] = useState(null);
    const [info, setInfo] = useState(false);
    const route = useRouter()
    //'/api/synergies/:id/availabilities?dateSlot=2023-03-01'
  //  console.log( route.query.id?.toString()!,value);

    function displayInfo(e :any) {
      setInfo(!info);
      setEvent(e );
      console.log(value,e )
      // localStorage.setItem("",[e.target.innerText])
         let  appointment= {
        "dateSlot": value,
        "selectedSlots": [e],
        "communicationChannels": ["valid", "communication", "channels"]
    }
    localStorage.setItem("appointment",  JSON.stringify(appointment))
   }
  return (
    <div className="times">
   { availableData?.spots && availableData?.spots?.map(slots => {
    // console.log({slots})
    return (
    <div>
      <button onClick={(e)=> displayInfo(slots.startTime)}> 
      {slots.startTime} - {slots.status}
      
      </button>
    </div>
        )
     })}
    <div>
      {info ? `Your appointment is set to ${event} ${value}` : null}
    </div>
 </div>
  )
}

export default Times