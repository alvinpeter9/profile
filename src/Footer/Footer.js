import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegUser, FaLinkedin, FaGithub, FaCopyright, FaTwitterSquare } from 'react-icons/fa';
import { MdAlternateEmail, MdMail } from 'react-icons/md';
import { GiSelfLove, GiCheckMark } from 'react-icons/gi';
import { BsEmojiSmile } from 'react-icons/bs';
import axios from '../axios';

import PrevPage from "../UI/Navigation/PrevPage";
import Header from '../Header/Header';
import Title from '../UI/Title/Title';
import Heading from '../UI/Title/Heading';
import classes from './Footer.module.css';
import connect from '../Asset/Image/drinkwithme.png';



const Footer = (props) =>{

const [status, setStatus] = useState(false);

const date =()=>{
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'];
  let dateFunc = new Date();
  let day = dateFunc.getDate();
  let month = months[dateFunc.getMonth()];
  let year = dateFunc.getFullYear();
  return day+'-'+month+'-'+year;
}


const commentHandler =(e)=>{
  e.preventDefault()
  axios.post('/comments.json', {
    Name: e.target.name.value,
    Email: e.target.email.value,
    Message: e.target.message.value,
    Date: date()
  })
  .then(res=>{
    if (res.status===200) {
    setStatus(true);
    e.target.name.value='';
    e.target.email.value='';
    e.target.message.value='';
    }
  })
  .catch(err=>console.log(err));
}


  return(
    <React.Fragment>
    <footer className={classes.Footer}>

    {!props.show? <Header />: null}

    <Link to="/projects">  <PrevPage style={{color:'#fafafa'}} /> </Link>

    {props.show? <Heading heading={'Contact'} style={{borderTop: '5px solid #e8bfcb'}} />:
    <Title title={'Contact'} style={{color:"#e8bfcb", backgroundColor:"#fafafa"}} />}

  <div className={classes.Box}>
        <div className={classes.Contact__intro}>
        <h2>Get in touch with me <BsEmojiSmile className={classes.react_icon} /></h2>
        I would love to connect and work with you.
        </div>
    <div className={classes.Wrapper}>
    <div className={classes.Form__wrapper}>

    <form className={classes.Form}
          onSubmit={commentHandler}>

    <div className={classes.Input}><FaRegUser style={{color:'#508fed'}} />
      <input type="text" name="name" placeholder='Full Name' required />
      </div>
      <div className={classes.Input}><MdAlternateEmail style={{color:'#508fed'}} />
      <input type="email" name="email" placeholder='Email' required />
      </div>
      <div className={classes.Input}>
      <textarea name="message" placeholder='Message' required />
      </div>
      {status?<div className={classes.Footer__success}>
              <GiCheckMark style={{color:'seagreen', verticalAlign:'center', marginRight:'5px'}} />
              Your message has been delivered, thank you.
           </div>:
        <button type='submit'>
              Send</button> }
    </form>
    </div>
    <div className={classes.Footer__socials}>

    <div className={classes.Footer__social}>
    <a href="https://github.com/alvinpeter9"><FaGithub className={classes.react_icon} />
    <span className={classes.Social__text}> Follow my Github</span>
        </a>
      </div>

      <div className={classes.Footer__social}>
      <a href="mailto:alvinpeter9@gmail.com?subject=Hello Alvin"><MdMail className={classes.react_icon} />
      <span className={classes.Social__text}> Send me an Email</span>
        </a>
      </div>

      <div className={classes.Footer__social}>
      <a href="https://twitter.com/digital_alvin"><FaTwitterSquare className={classes.react_icon} />
      <span className={classes.Social__text}> Follow me on Twitter</span>
        </a>

        </div>

      <div className={classes.Footer__social}>
      <a href="https://www.linkedin.com/in/simeon-alvin-ibodje-20a0a4157"><FaLinkedin className={classes.react_icon} />
      <span className={classes.Social__text}> Connect with me on LinkedIn</span>
        </a>
        </div>


      </div>

        </div>
        <div className={classes.Copyright}>
        Made with <GiSelfLove style={{color:'white',verticalAlign: 'middle'}} /> by Alvin
        <br/><FaCopyright style={{color:'white',verticalAlign: 'middle'}} /> 2021 </div>
        </div>
        {!props.display? <img className={classes.Connect__image}
        src={connect} alt='coffee' /> :null}
      </footer>
    </React.Fragment>
  )
};


export default Footer;
