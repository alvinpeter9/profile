import { FaLinkedin, FaGithub, FaCopyright, FaTwitterSquare } from 'react-icons/fa';
import { GiSelfLove } from 'react-icons/gi';


const Footer = () =>{


  return(

    <footer className="footer">

      <div className="footer__bg">
  
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">Alvin</h1>
            <span className="footer__subtitle">Frontend developer</span>
          </div>

          <ul className="footer__links">

          {
            ['Portfolio', 'Testimonial', 'ContactMe'].map((item, id)=>(
              <li key={item + id}>
               <a href={'#'+item.toLowerCase()} className="footer__link">{item}</a>
            </li>
            ))
          }

          </ul>

          <div className="footer__socials">
            <a href="https://www.linkedin.com/in/simeon-alvin-ibodje-20a0a4157" 
                target="_blank" rel='noreferrer nofollow' className="footer__social">
              <FaLinkedin />
            </a>
                        
            <a href="https://twitter.com/digital_alvin" target="_blank" rel='noreferrer nofollow' className="footer__social">
              <FaTwitterSquare />
            </a>

           <a href="https://github.com/alvinpeter9" target="_blank" rel='noreferrer nofollow' className="footer__social">
              <FaGithub />
            </a>

        </div>
      </div>

      <p className="footer__copy"> Made with <GiSelfLove /> By Alvin. <br/>
        <FaCopyright />  All rights reserved {new Date().getFullYear()}</p>
    </div>          
    </footer>
  )
};


export default Footer;
