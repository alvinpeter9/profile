import { MdOutlineStar } from 'react-icons/md';


function CarouselData({ testimonial_img, testifier, job, testimonial}) {
  return (
    <div className="testimonial__content">
        <div className="testimonial__data">
        
            <div className="testimonial__header">
                <div className="testimonial__img">
                    <img src={testimonial_img} alt="dp" />
                </div>

                <div>
                    <h3 className="testimonial__name">{testifier}</h3>
                    <span className="testimonial__client">{job}</span>
                </div>
            </div>
          
            <div>
                <MdOutlineStar className='testimonial__icon-star' />
                <MdOutlineStar className='testimonial__icon-star' />
                <MdOutlineStar className='testimonial__icon-star' />
                <MdOutlineStar className='testimonial__icon-star' />
                <MdOutlineStar className='testimonial__icon-star' />
            </div>
        
        </div>

        <p className="testimonial__description">{testimonial}</p>
    </div>
  );
}

export default CarouselData;
