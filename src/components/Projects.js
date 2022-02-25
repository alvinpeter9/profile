import Card from "./utils/Card";
import { ProjectData } from "./utils/UserData";


const Projects = () =>{
return(
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Some of my projects</span>

      <div className="container portfolio__container">
          
          
        {/* <!--==================== PORTFOLIO ====================--> */}
        {
          ProjectData.map((data, id)=>
            <Card 
              key={id}
              data={data} />)
        }
              
          </div>
  </section>
)
}

export default Projects;
