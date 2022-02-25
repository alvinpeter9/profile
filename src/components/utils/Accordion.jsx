import { useState } from 'react';
import { BiServer } from "react-icons/bi";
import { BsBraces } from "react-icons/bs";
import { MdKeyboardArrowDown } from 'react-icons/md';


export const SkillList =({title, percent})=>(

    <div className="skills__data">
        <div className="skills__titles">
            <h3 className="skills__name">{title}</h3>
            <span className="skills__number">{percent}</span>
        </div>
        <div className="skills__bar">
            <span className="skills__percentage" style={{width: percent}}></span>
        </div>
    </div>
);


function Accordion({data, id }) {

    const [isActive, setisActive] = useState(true); 

    const toggleHandler=()=>{
        setisActive(!isActive);
    };

  return (
  <div>
    <div data-aos="fade-up" className="skills__header" onClick={toggleHandler}>
       {
           data.icon === 'BsBraces'? <BsBraces className='skills__icon'/>:
            (data.icon === 'BiServer'? <BiServer className='skills__icon' />:'')       
            }
  
        <div>
            <h1 className="skills__title">
                {data.stack}
            </h1>
            <span className="skills__subtitle">{data.years}</span>
        </div>
        <MdKeyboardArrowDown className="skills__arrow" 
            style={!isActive && {transform: 'rotate(-180deg)'}}/>
    </div>
    <div data-aos="slide-up" className="skills__list grid">
      {
          isActive && data.tech.map((i, id)=>
                <SkillList key={id} title={i.title} percent={i.percent} />
          )
      }
    </div>
   </div> );
}

export default Accordion;
