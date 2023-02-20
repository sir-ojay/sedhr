const Timeconverter = (messageTime:string) => {
   let time = Date.now() - (new Date(messageTime).getTime()) 
    let sec,min,hour,day,week,month,year

    sec = Math.floor(time/1000);
    min= Math.floor(sec/60);
    hour =Math.floor(min/60);
    day =Math.floor(hour/24);
    
let times =
day?`${day} days`
:hour?`${hour} hours`
:min?`${min} minutes`
:sec ?`${sec} seconds`:""
return times
}

export default Timeconverter