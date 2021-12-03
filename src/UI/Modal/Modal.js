import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaWindowClose,FaHome, FaUserTie, } from 'react-icons/fa';
import { AiFillAppstore } from 'react-icons/ai';
import { MdContactMail } from 'react-icons/md';
import classes from './Modal.module.css';

const modal = (props) => (
  <div style={{display: props.showModal? 'block':'none'}}>
      <div className={classes.Modal}
        onClick={props.disableModal}>
      </div>

        <div className={classes.Link}>
            <FaWindowClose className={classes.react_icon}
                          onClick={props.disableModal}/>

            <NavLink to="/"><FaHome className={classes.react_icon}/> Home</NavLink>

            <NavLink to="/about"><FaUserTie className={classes.react_icon}/>About</NavLink>

            <NavLink to="/projects"><AiFillAppstore className={classes.react_icon}/>Projects</NavLink>

            <NavLink to="/contact"><MdContactMail className={classes.react_icon}/>Contact</NavLink>

      </div>
  </div>
);

export default modal;
