import './styless.css'

import Icons from './Icons';
import Button from './Button';

const ButtonSelect = () => {
    return (
        <div className='btn'>
          <Button />
          <Icons creator={false}/>
        </div>
     );
}
 
export default ButtonSelect;