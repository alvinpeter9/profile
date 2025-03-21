import Accordion from './utils/Accordion';
import { AccordionData } from './utils/UserData';



export default function Skills() {

/*==================== SKILLS ACCORDION ====================*/
 
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical level</span>

            <div className="skills__container container grid">

            {
                AccordionData.map((data, index)=>(
                    <Accordion key={index} id={index} data={data} /> 
                ))
            }
           
            </div>

        </section>
    )
}
