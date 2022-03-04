import { useState } from "react";
import { BiSend, BiError } from "react-icons/bi";
import { GiCheckMark } from 'react-icons/gi';
import { GoLocation} from 'react-icons/go';
import axios from '../axios'; 
import { SiMaildotru } from 'react-icons/si';
import { BiPhoneCall } from 'react-icons/bi';


export default function Contact() {

    const [status, setStatus] = useState(false);
    const [error, seterror] = useState(false);

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
    .catch(err=>seterror(true));
    }

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Contact Me</h2>
            <span className="section__subtitle">Get in touch</span>

            <div className="contact__container container grid">
                <div>

                    <div className="contact__information">
                         <BiPhoneCall className='contact__icon' />
                        <div>
                            <h3 className="contact__title">Call</h3>
                            <span className="contact__subtitle"><a href="tel:+447774267407"> +44 7774 267407</a></span>
                        </div>
                    </div> 

                    <div className="contact__information">
                        <i className="uil uil-envelope contact__icon"></i>
                        <div><SiMaildotru className='contact__icon' />
                            <h3 className="contact__title"> Email</h3>
                            <span className="contact__subtitle">alvinpeter9@gmail.com</span>
                        </div>
                    </div>

                    <div className="contact__information">
                        <i className="uil uil-map-marker contact__icon"></i>
                        <div><GoLocation className='contact__icon' />
                            <h3 className="contact__title">Location</h3>
                            <span className="contact__subtitle">United Kingdom</span>
                        </div>
                    </div>
                </div>
    
                <form onSubmit={commentHandler} className="contact__form grid">
                    <div className="contact__inputs grid">

                        <div className="contact__content">
                            <label className="contact__label">Name</label>
                            <input type="text" name="name" className="contact__input" required/>
                        </div>

                        <div className="contact__content">
                            <label className="contact__label">Email</label>
                            <input type="email" name="email" className="contact__input" required/>
                        </div>

                        <div className="contact__content">
                            <label className="contact__label">Message</label>
                            <textarea name="message" id="" cols="0" rows="7" className="contact__input" required />
                        </div>

                        <div>

                            {status? <div style={{backgroundColor:"#d1e7dd", border:'1px solid #badbcc',
                                                 borderRadius:'10px',textAlign:'center',padding:'10px'}}>
                                    <GiCheckMark style={{color:'white', verticalAlign:'center', marginRight:'5px'}} />
                                    Your message has been delivered, thank you.
                                    </div>: error? <div style={{backgroundColor:"#ffe2e2", border:'1px solid #fd4e4e',
                                                 borderRadius:'10px',textAlign:'center',padding:'10px'}}>
                                    <BiError style={{color:'#fd4e4e', verticalAlign:'center', marginRight:'5px'}} />
                                    An error occurred, please refresh the page and try again.
                                    </div> : <button type="submit" className="button button--flex">
                                         Send Message <BiSend className="button__icon"/>
                                     </button>   
                            }              
                        </div>
                    </div>
                </form>
            </div>

        </section>
    )
}
