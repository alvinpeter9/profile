import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../UI/Card/Card';
import PrevPage from "../UI/Navigation/PrevPage";
import NextPage from "../UI/Navigation/NextPage";
import Title from '../UI/Title/Title';
import Heading from '../UI/Title/Heading';
import Header from '../Header/Header';
import classes from './Projects.module.css';
import Tictactoe from '../Asset/Image/tictactoe.png';
import Guess from '../Asset/Image/guess.png';
import Naijakids from '../Asset/Image/9jakids.png';
import CSScalculator from '../Asset/Image/CSScalculator.PNG';





const Projects = (props) =>{
return(
  <React.Fragment>
  <div className={classes.Wrapper}>

    {!props.show? <Header />: null}

  <Link to="/contact"> <NextPage style={{color:'#e8bfcb'}} /> </Link>
  <Link to="/about"> <PrevPage /> </Link>


  {props.show? <Heading heading={'Projects'} />:
  <Title title={'Projects'} />}

      <div className={classes.Container}>

      <Card link="https://alvinpeter9.github.io/tictactoe/"
            image={Tictactoe}
            name="tictactoe game"
            description='Tictactoe Game' />


      <Card link="https://alvinpeter9.github.io/hotorcold/"
            image={Guess}
            name="guess game"
            description='Random Guess' />

      <Card link="https://alvinpeter9.github.io/9jakids/"
            image={Naijakids}
            name="9jakids Catalog"
            description='Children Education Catalog' />


      <Card link="#"
            image={CSScalculator}
            name="CSS calculato"
            description='CSS Calculator. [Coming Soon]' />


         </div>
      </div>
  </React.Fragment>
)
}

export default Projects;
