import { useState } from "react";
import { FcBriefcase, FcGraduationCap } from "react-icons/fc";
import TimeLine from "./utils/TimeLine";
import { TimeLineData } from "./utils/UserData";


export default function Qualification() {
    const [isWork, setisWork] = useState(false);

    return (
        <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={`qualification__button button--flex ${!isWork? 'qualification__active':''}`} 
                    onClick={()=>setisWork(false)}>
                    <FcGraduationCap className="qualification__icon"/> Education
                </div>
                
                <div className={`qualification__button button--flex ${isWork? 'qualification__active':''}`} 
                    onClick={()=>setisWork(true)}>
                    <FcBriefcase className="qualification__icon"/> Work
                </div>
            </div>
            <div className="qualification__timeline container">
                {/* <!--==================== QUALIFICATION CONTENT 1 ====================--> */}
                {
                   isWork? TimeLineData.map((data)=>data.Work.map((res,id)=>
                            <TimeLine 
                                key={id}
                                Name={res.Name}
                                Major={res.Major}
                                Timing={res.Timing}
                        />
                    )) :  TimeLineData.map((data)=>data.Education.map((res,id)=>
                            <TimeLine 
                                key={id}
                                Name={res.Name}
                                Major={res.Major}
                                Timing={res.Timing}
                        />
                    ))
                }

            </div>
        </div>

    </section>
    )
}
