
import {TiArrowBack} from 'react-icons/ti';
import {MdDelete, MdEdit} from 'react-icons/md'
import './styless.css'

const Icons = ({creator}) => {
    return ( 
        <div className={`btn-icon ${creator && 'reply'}`}>
            {creator ? (
                <div className='img-reply'>
                    <p className='icons blu'><TiArrowBack />Reply</p>
                </div>
               )   : (
                   <div className='img-delete'>
            <p className='icons del'><MdDelete />Delete</p>
            
            <p className='icons blu'><MdEdit />Edit</p>
            
            </div>
               )
            }
          </div>
     );
}
 
export default Icons;