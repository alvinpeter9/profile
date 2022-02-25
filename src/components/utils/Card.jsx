import { BiRightArrow } from 'react-icons/bi';


function Card({data}) {
  return (
    <div data-aos="fade-up" className="portfolio__card">
        <img src={data.PreviewImage} alt={data.ProjectName} className="portfolio__img"/>

        <div className="portfolio__data">
        <h3 className="portfolio__title"> {data.ProjectName} </h3>
        <p className="portfolio__description">{data.Description}</p>
            <a href={data.Url} target='_blank' rel='noreferrer' className="button button--flex button--small portfolio__button">
                Demo <BiRightArrow className="button__icon"/></a>
        </div>
    </div>
  )
}

export default Card;
