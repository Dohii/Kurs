import classes from './ReactLogo.module.css';
import { useNavigate } from 'react-router-dom';

function ReactLogo() {
  const navigate = useNavigate();
  return (
    <div className={classes.main} onClick={() => navigate('/')}>
      <div className={classes.ellipse}></div>
      <div className={classes.ellipse2}></div>
      <div className={classes.ellipse3}></div>
      <div className={classes.ball}></div>
    </div>
  );
}

export default ReactLogo;
