import classes from './styless.module.css'

import Icons from './Icons';
import Button from './Button';

const ButtonSelect = () => {
    return (
        <div className={classes.btn}>
          <Button />
          <Icons creator={false}/>
        </div>
     );
}
 
export default ButtonSelect;