
import {TiArrowBack} from 'react-icons/ti';
import {MdDelete, MdEdit} from 'react-icons/md'
import classes from './styless.module.css'

const Icons = ({creator}) => {
    return ( 
        <div className={classes.btn_icon  && (creator && classes.reply)}>
            {creator ? (
                <div className={classes.img_reply}>
                    <p className={classes.icons && classes.blu} ><TiArrowBack />Reply</p>
                </div>
               )   : (
                   <div className={classes.img_delete}>
            <p className={classes.icons && classes.del}><MdDelete />Delete</p>
            
            <p className={classes.icons && classes.blu}><MdEdit />Edit</p>
            
            </div>
               )
            }
          </div>
     );
}
 
export default Icons;