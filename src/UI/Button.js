import './styless.css'
import {TiArrowBack } from 'react-icons/ti'
import {HiPlus, HiMinus} from 'react-icons/hi'
import { reply } from './import'

const ButtonSelect = () => {
    return (
        <div className='btn'>
          <div className='btn-select'>
            <button><HiPlus /></button>
            <p>200</p>
            <button><HiMinus /></button>
          </div>
          <div className='btn-icon'>
            <img className='img-icon' src={reply} alt='ba' />
            <span>Reply</span>
          </div>
        </div>
     );
}
 
export default ButtonSelect;