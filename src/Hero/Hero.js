import React from 'react';
import { Link } from 'react-router-dom';

import NextPage from "../UI/Navigation/NextPage";
import Header from '../Header/Header';
import classes from './Hero.module.css';
import TypeWriterEffect from 'react-typewriter-effect';
import HeroImage from '../Asset/Image/hero-image.jpg';



const Hero = (props) => {

  return(
  <React.Fragment>
  <div className={classes.HeroSection}>
  <Header show={props.show} />

    <Link to="/about">
      <NextPage />
    </Link>

    <div className={ classes.Wrapper }>
      <div className={classes.Hero}>
            <TypeWriterEffect
                textStyle={{
                color: '#3F3D56',
                fontWeight: 700,
                fontSize: '1.5em',
              }}
                startDelay={1500}
                cursorColor="#35a7ff"
                multiText={[
                  'Hello, i am simeon alvin ibodje',
                  'a passionate software developer,',
                  'welcome to my portfolio website..'
                ]}
                multiTextDelay={1000}
                typeSpeed={50}
            />
            <em>i build efficient, clean and reliable software solution</em>
        <a href="mailto:alvinpeter9@gmail.com?subject=Hello Alvin">
            <button className={classes.BigButton}>
            <div className={classes.Btn}>
            Hire Me
            </div>
            </button>
        </a>
      </div>
        <img className={classes.HeroImage}
        src={HeroImage} alt='HeroImage'/>
      </div>
  </div>
  </React.Fragment>
);
}
export default Hero;
