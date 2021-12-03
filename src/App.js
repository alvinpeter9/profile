import React  from 'react';
import { Route } from 'react-router-dom';
import useWindowDimensions from './UI/Hook/useWindowDimensions';

import Section from './Section/Section';
import About from './About/About';
import Projects from './Projects/Projects';
import Footer from './Footer/Footer';
import Hero from './Hero/Hero';




const App =()=> {

  const screenSize  = useWindowDimensions();
  const display = screenSize.width < 550 || screenSize.width < 1000 ||
                  (screenSize.width < 1290 && screenSize.height > 1200);

    let components = display ? <div>
    <Hero show={display} />
    <Section show={display} />
    <Footer show={display}
            display={display}/>
    </div>:<div>

      <Route path="/" exact component={Hero} />
      <Route path="/about" exact component={About} />
      <Route path="/projects" exact component={Projects} />
      <Route path="/contact" exact component={Footer} />
      <Route path="/profile" exact component={Hero} />

      </div>;

    return(
      <React.Fragment>

        {components}

      </React.Fragment>
    );
}

export default App;
