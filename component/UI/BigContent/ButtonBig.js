
import {HiPlus, HiMinus} from 'react-icons/hi'

import classes from './styleBig.module.css'

const ButtonBig = () => {
  return ( 
    <div className={classes.btn_bg_select}>
              <p className={classes.btn_bg_plus} ><HiPlus/></p>
        
            <h3 className={classes.h3em}> 20</h3>
        
              <p className={classes.btn_bg_plus}><HiMinus/></p>
        
    </div>
   );
}
 
export default ButtonBig;