import {HiPlus, HiMinus} from 'react-icons/hi'
import './styless.css'

const Button = () => {
  return ( 
    <div className='btn-select'>
            <button>
              <p className='btn-plus' ><HiPlus/></p>
            </button>
            <h3>200</h3>
            <button>
              <p className='btn-plus' ><HiMinus/></p>
            </button>
    </div>
   );
}
 
export default Button;

