import classes from './ProgressBar.module.css';

const progressBar = (props) => (
  <div className={classes.Wrapper}>
    <div className={classes.Progress} style={{width: props.percent, backgroundColor: props.bgcolor}}>
      <span className={classes.Dot} style={{borderColor: props.bgcolor}}>
        {props.percent}
      </span>
    </div>
  </div>
);

export default progressBar;
