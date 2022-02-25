import { BiSend } from "react-icons/bi";
import avatar from '../assets/img/avatar3.png';


export default function Feature() {
    return (
        <section className="project section">
            <div className="project__bg">
             <div className="project__container container grid">
                <div data-aos="fade" className="project__data">
                    <h2 className="project__title">You have a project in mind?</h2>
                    <p className="project__description">
                    Contact me now, I would love to help you bring your ideas into reality.
                    </p>
                    <a href="#contact" className="button button--flex button--white">
                        Contact Me <BiSend className="project__icon button__icon"/>
                    </a>
                </div>
                <img data-aos="fade-up" src={avatar} alt="avatar" className="project__img"/>
             </div>
            </div>

         </section>
    )
}
