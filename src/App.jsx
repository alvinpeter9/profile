import { useEffect } from 'react';
import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import Hero from './components/Hero';
import Header from './components/Header';
import Skills from './components/Skills';
import Feature from './components/Feature';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Qualification from './components/Qualification';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Testimonial from './components/Testimonial';




const App =()=> {

  useEffect(() => {
    Aos.init({duration: 2000})
}, []);

    return(
      <>

        <Header />
        
        <main className="main">
          <Hero />
          <About />
          <Skills />
          <Qualification />
          <Projects />
          <Feature />
          <Testimonial />
          <Contact />
        </main>

        <Footer />

      </>
    );
}

export default App;
