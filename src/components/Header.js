import { useState, useEffect } from 'react';
import { BiHome, BiUserCircle, BiBriefcase, BiSend, BiMoon, BiSun } from 'react-icons/bi';
import { BsFileEarmarkText } from 'react-icons/bs';
import { AiOutlinePicture, AiOutlineCloseCircle, AiOutlineAppstore } from 'react-icons/ai';


const Header = () => {

// =============================== DARKMODE TOGGLE ===========================================
  const [isDark, setisDark] = useState(false);

  const selectedTheme = localStorage.getItem('selected-theme');
  useEffect(() => {
    if (selectedTheme) {
      // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
      document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove']('dark-theme');
      selectedTheme === 'dark' ? setisDark(true) : setisDark(false);
    };
  }, [selectedTheme]);

// We obtain the current theme that the interface has by validating the dark-theme class
    const getCurrentTheme = () => document.body.classList.contains('dark-theme') ? 'dark' : 'light'

// Activate / deactivate the theme manually with the button
    const ToggleThemeHandler=(e) => {
        // Add or remove the dark / icon theme
        document.body.classList.toggle('dark-theme')
        setisDark(!isDark)
        // We save the theme and the current icon that the user chose
        localStorage.setItem('selected-theme', getCurrentTheme())
    }

// =========================ADD SHADOW TO HEADER WHEN SCROLLED DOWN===========================

const [headerScroll, setHeaderScroll] = useState();

  useEffect(() => {
    const scrollHeader = (e)=>{
      // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
      if (window.scrollY >= 80) {
        setHeaderScroll(true);
      } else {
        setHeaderScroll(false);
      }
    }
    window.addEventListener('scroll', scrollHeader);
     return ()=> window.removeEventListener('scroll', scrollHeader);
   })
  

  // ========================REMOVE MOBILE MENU WHEN CLICKED================================

  const [navToggle, setNavToggle] = useState(false);

  const navToggleHandler = () => setNavToggle(!navToggle);

  const navLink = document.querySelectorAll('.nav__link');

    useEffect(() => {
      navLink.forEach(n=>n.addEventListener('click', navToggleHandler))
      return () => {
        navLink.forEach(n=>n.removeEventListener('click', navToggleHandler))
      }
    })

  // =======================================================================================



    return(
      <header className={`header ${headerScroll? 'scroll-header': "" }`} id="header">
        <nav className="nav container">
           
          <a href="#home" className="nav__logo">Alvin</a>

            <div className={`nav__menu ${navToggle && 'show-menu'}`} id="nav-menu">
              <ul className="nav__list grid">

                <li className="nav__item">
                  <a href="#home" className="nav__link active-link">
                    <BiHome className="nav__icon" /> Home
                  </a>
                </li>
                
                <li className="nav__item">
                  <a href="#about" className="nav__link">
                    <BiUserCircle className="nav__icon"/> About
                  </a>
                </li>

                <li className="nav__item">
                  <a href="#skills" className="nav__link">
                    <BsFileEarmarkText className="nav__icon"/> Skills
                  </a>
                </li>

                <li className="nav__item">
                  <a href="#portfolio" className="nav__link">
                    <AiOutlinePicture className="nav__icon"/> Portfolio
                  </a>
                </li>

                <li className="nav__item">
                  <a href="#testimonial" className="nav__link">
                    <BiBriefcase className="nav__icon"/> Testimonial
                  </a>
                </li>

                <li className="nav__item">
                  <a href="#contact" className="nav__link">
                    <BiSend className="nav__icon"/> ContactMe
                  </a>
                </li>
              </ul>

                <AiOutlineCloseCircle className="nav__close"
                  onClick={navToggleHandler} />
            </div>
                
            <div className="nav__btns">
{/* ======================= Theme change button ================= */}
              { !isDark? <BiMoon className="change-theme" onClick={ToggleThemeHandler} /> :
              <BiSun className="change-theme" onClick={ToggleThemeHandler} /> }
                
{/* =========================== Mobile Menu ===================== */}
                <div className="nav__toggle" 
                    onClick={navToggleHandler}>
                  <AiOutlineAppstore />
                </div>
            </div>
        </nav>
      </header>
  );

}


export default Header;
