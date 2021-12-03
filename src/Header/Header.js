import React, { useState } from 'react';
import Modal from '../UI/Modal/Modal';
import { GiHamburgerMenu } from 'react-icons/gi';

import classes from './Header.module.css';



const HeaderFile = (props) => {

  const [modal, setModal] = useState(false);

    return(
      <React.Fragment>
        <div className={classes.Wrapper}>
            <span className={classes.Logo}>&lt; Alvin /&gt;</span>

          { !props.show? <> <Modal showModal={modal} disableModal={()=>setModal(false)} />
            <GiHamburgerMenu className={classes.SmallButton} onClick={()=>setModal(true)} /> </>:
            null }

        </div>
      </React.Fragment>
    );

  }


export default HeaderFile;
