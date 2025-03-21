import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CarouselData from './utils/CarouselData';
import { TestimonialData } from './utils/UserData';


export default function Testimonial() {
  return(
    <section className="testimonial section" id="testimonial">
        <h2 className="section__title">Testimonial</h2>
        <span className="section__subtitle">What people think about me</span>
        <div className="testimonial__container container">
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={6100}>

                        {/* <!--==================== TESTIMONIALS ====================--> */}
                {
                    TestimonialData.map((data, id)=>(
                        <CarouselData key={id}
                            testimonial_img={data.img} 
                            testifier={data.name} 
                            job={data.job} 
                            testimonial={data.text} />
                    ))
                }

            </Carousel>
        </div>
    </section>
  );
}
