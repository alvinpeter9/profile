import { BiDownArrowAlt, BiMouse, BiSend } from 'react-icons/bi';
import { FaGithub, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import avatar from '../assets/img/avatar.png';
import { Typewriter } from 'react-simple-typewriter';



const Hero = () => {

  return(
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">

            <a data-aos="slide-right" href="https://www.linkedin.com/in/simeon-ibodje" target="_blank" 
                 rel='noreferrer nofollow' className="home__social-icon">
                <FaLinkedin/>
            </a>

            <a data-aos="slide-right" href="https://twitter.com/digital_alvin" target="_blank" rel='noreferrer nofollow' 
                className="home__social-icon">
                <FaTwitterSquare />
            </a>

            <a data-aos="slide-right" href="https://github.com/alvinpeter9" target="_blank" rel="noreferrer nofollow" className="home__social-icon">
                 <FaGithub />
            </a>
          </div>

          <div data-aos="slide-down" className="home__img">
             <svg className="home__blob" viewBox="0 0 200 187">
                <mask id="mask0" mask-type="alpha">
                  <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                     130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                     97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                     0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
                </mask>
                <g mask="url(#mask0)">
                  <path strokeWidth={7} stroke='var(--first-color)' d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" pathLength='1'/>
                  <image className="home__blob-img" x="-15" y="-15" 
                        href={avatar} alt="avatar"/>
                </g>
              </svg>
          </div>

          <div data-aos="zoom-in" className="home__data">
            <h1 className="home__title">Hi, I am Alvin</h1>
            <h3 className="home__subtitle">A Software Developer.</h3>
            <p className="home__description">
            🚀 Building performant, scalable, and user-friendly web experiences
            <span className="home__description-subtitle"> — {' '}
          <Typewriter
            words={[
              "One line of code at a time. 💻",
              "One component at a time. ⚛️",
              "One innovation at a time. ✨",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span></p>
            <a href="#contact" className="button button--flex">
               Contact Me <BiSend className="button__icon"/>
            </a>
          </div>
        </div>

        <div data-aos="slide-up" className="home__scroll">
          <a href="#about" className="home__scroll-button button--flex">
            <BiMouse className="home__scroll-mouse"/>
            <span className="home__scroll-name"> Scroll down </span>
            <BiDownArrowAlt className="home__scroll-arrow"/>
          </a>
        </div>
      </div>
    </section>
);
}
export default Hero;
