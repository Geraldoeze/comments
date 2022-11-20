import {HiPlus, HiMinus} from 'react-icons/hi'
import classes from  './styless.module.css'

const Button = () => {
  return ( 
    <div className={classes.btn_select}>
            <button>
              <p className={classes.btn_plus} ><HiPlus/></p>
            </button>
            <h3 className={classes.h3em}>200</h3>
            <button>
              <p className={classes.btn_plus} ><HiMinus/></p>
            </button>
    </div>
   );
}
 
export default Button;

