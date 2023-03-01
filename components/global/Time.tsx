import React, {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Times from '../../components/global/Times'



const Time = ({showTime, value,presentData, availableData} : any) => {
  return (
    <div>
  {showTime ? <Times value={value} /> : null}
 </div>
  )
}

export default Time