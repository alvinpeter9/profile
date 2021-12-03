import classes from './Card.module.css';

const Card =({link, image, name, description})=>(
  <a href={link}>
    <div className={classes.Card}>
      <img src={image} alt={name} />
      <p>{description}</p>
    </div>
   </a>
);

export default Card;
