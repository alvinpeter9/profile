import { FcCalendar } from 'react-icons/fc';



export default function TimeLine({Name, Major, Timing}) {

  return (
    <div className="qualification__content position">
      <div className="qualification__data">
  
          <h3 className="qualification__title"> {Major} </h3>
          <span className="qualification__subtitle"> {Name} </span>
          <div className="qualification__calender">
            <FcCalendar /> { Timing }
          </div>
  
      </div>
  </div>
  )
};