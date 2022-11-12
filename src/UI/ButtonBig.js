
import {HiPlus, HiMinus} from 'react-icons/hi'

import './styleBig.css'

const ButtonBig = () => {
  return ( 
    <div className='btn-bg-select'>
              <p className='btn-bg-plus' ><HiPlus/></p>
        
            <h3>20</h3>
        
              <p className='btn-bg-plus'><HiMinus/></p>
        
    </div>
   );
}
 
export default ButtonBig;