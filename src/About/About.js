import React from 'react';
import { Link } from 'react-router-dom';
import { FaReact, FaHtml5, FaCss3Alt, FaPython } from 'react-icons/fa';
import { SiJavascript, SiPostgresql } from 'react-icons/si';

import PrevPage from "../UI/Navigation/PrevPage";
import NextPage from "../UI/Navigation/NextPage";
import Title from '../UI/Title/Title';
import Heading from '../UI/Title/Heading';
import Header from '../Header/Header';
import classes from './About.module.css';
import displayImage from '../Asset/Image/displayImage.jpg';
import Progress from "../UI/Progressbar/ProgressBar";



const About = (props) =>{
return(
    <React.Fragment>
    <div className={classes.AboutContent}>

    {!props.show? <Header />: null}



    <Link to="/projects"> <NextPage style={{color:'#e8bfcb'}} /> </Link>

    <Link to="/"> <PrevPage /> </Link>

      {props.show? <Heading heading={'About Me'} />:
      <Title title={'About Me'} />}

      <div className={classes.Wrapper}>
      <div className={classes.About___image}>
        <img className={classes.Image}
        src={displayImage} alt='Alvin' />
           <h3>Simeon Alvin Ibodje</h3>
           <p>Front-End Developer || Electrical/Electronics Engineer</p>
      </div>

      <div className={classes.Content}>
        <p>I am passionate about creating well designed and user-friendly interfaces.
          I also enjoy working in teams to create well-rounded products that are easy to use and engaging.</p>
          <p>Academically, I have a Bachelor of Engineering
        Degree in Electrical and Electronics Engineering with several certifications from renowned
        E-institutions like Udemy.</p>

        <div className={classes.Topic}>
        Technology Stack
        </div>
        <div className={classes.Stacks}>
        <div className={classes.Stack}>
        <div><FaHtml5 className={classes.react_icon} />HTML5</div>
            <Progress percent="80%" bgcolor="violet"/>
          </div>
          <div className={classes.Stack}>
            <div><FaCss3Alt className={classes.react_icon} />CSS3</div>
            <Progress percent="70%" bgcolor="green"/>
          </div>
          <div className={classes.Stack}>
            <div><SiJavascript className={classes.react_icon} />JavaScript</div>
            <Progress percent="60%" bgcolor="blue"/>
          </div>
          <div className={classes.Stack}>
            <div><FaReact className={classes.react_icon} />React</div>
            <Progress percent="60%" bgcolor="indigo"/>
          </div>
          <div className={classes.Stack}>
            <div><FaPython className={classes.react_icon} />Python</div>
            <Progress percent="50%" bgcolor="seagreen"/>
        </div>
        <div className={classes.Stack}>
          <div><SiPostgresql className={classes.react_icon} />SQL</div>
          <Progress percent="50%" bgcolor="black"/>
      </div>
        </div>

      </div>
      </div>

    </div>
    </React.Fragment>
)
}

export default About;
