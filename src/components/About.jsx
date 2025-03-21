import { CgArrowLongRight } from 'react-icons/cg';
import { FiDownload } from 'react-icons/fi';
import avatar from '../assets/img/avatar2.png';



const About = (props) =>{

return(  
  <section className="about section" id="about">

    <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>
        <div className="about__container container grid">

          <img data-aos="fade-up" className="about__img" src={avatar} alt="avatar"/>

          <div data-aos="zoom-in-right" className="about__data">
              <p className="about__description">
                  <CgArrowLongRight /> Hello,<br/><br/>I am Simeon Alvin Ibodje, 
                  an enthusiatic web developer with extensive knowledge in React.
                    <br/>
                    <br/>
                   I enjoy working in teams to create well-rounded products that are 
                   easy to use and engaging.
              </p>

              {/* <div className="about__info">
                <div>
                  <span className="about__info-title">1+</span>
                  <span className="about__info-name">Years <br/> experience</span>
                </div>

                <div>
                  <span className="about__info-title">15+</span>
                  <span className="about__info-name">Completed <br/> projects</span>
                </div>

                <div>
                  <span className="about__info-title">1</span>
                  <span className="about__info-name">Company <br/> worked</span>
                </div>

              </div> */}

              <div className="about__buttons">
                <a download="" href="mailto:alvinpeter9@gmail.com?subject=Your%20CV" className="button button--flex">
                    Request for CV <FiDownload className="button__icon"/></a>
              </div>
          </div>
        </div>
  </section>
)
}

export default About;
