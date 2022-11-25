import {HiPlus, HiMinus} from 'react-icons/hi'
import classes from  './styless.module.css'
import Image from 'next/dist/client/image';



const Button = ({number}) => {
  return ( 
    <div className={classes.btn_select}>
            <button>
              <p className={classes.btn_plus} ><Image src='/images/icon-plus.svg' alt='i' width={'15px'} height={'15px'} /> </p>
            </button>
            <h3 className={classes.h3em}>{number}</h3>
            <button>
              <p className={classes.btn_minus} ><Image src='/images/icon-minus.svg' alt='i' width={'10px'} height={'2px'} /></p>
            </button>
    </div>
   );
}
 
export default Button;

