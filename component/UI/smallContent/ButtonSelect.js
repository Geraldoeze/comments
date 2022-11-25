import classes from './styless.module.css'

import Icons from './Icons';
import Button from './Button';

const ButtonSelect = ({score, currentUser, userData, show, ID}) => {
    return (
        <div className={classes.btn}>
          <Button number={score}/>
          <Icons openButton={show} IDE={ID} creator={currentUser} user={userData}/>
        </div>
     );
}
 
export default ButtonSelect;