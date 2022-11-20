
import {TiArrowBack} from 'react-icons/ti';
import {MdDelete, MdEdit} from 'react-icons/md'
import classes from './styless.module.css'
import Image from 'next/dist/client/image';

const Icons = ({creator}) => {
    return ( 
        <div className={classes.btn_icon  && (creator && classes.reply)}>
            {creator ? (
                <div className={classes.img_reply}>
                    <p className={classes.icons && classes.blu} ><Image src='/images/icon-reply.svg' alt='i' width={'15px'} height={'15px'} />   Reply</p>
                </div>
               )   : (
                   <div className={classes.img_delete}>
            <p className={classes.icons && classes.del}><Image src='/images/icon-delete.svg' alt='i' width={'15px'} height={'15px'}/>  Delete</p>
            
            {/* <p className={classes.icons && classes.del}><MdDelete />Delete</p> */}
            <p className={classes.icons && classes.blu}><Image src='/images/icon-edit.svg' alt='i' width={'15px'} height={'15px'} />  Edit</p>
            
            </div>
               )
            }
          </div>
     );
}
 
export default Icons;