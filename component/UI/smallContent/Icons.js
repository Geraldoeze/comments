
import classes from './styless.module.css'
import Image from 'next/dist/client/image';

const Icons = ({creator, user, openButton, IDE}) => {
    
    const buttonID = (event) => {
        if (event.target.id == IDE ) {
           return openButton(IDE)
          
        }
    }

    return ( 
        <div className={classes.btn_icon  && (creator && classes.reply)}>
            {!(creator.username === user.username) ? (
                <div className={classes.img_reply}>
                    <p onClick={buttonID} id={IDE} className={classes.icons && classes.blu} ><Image src='/images/icon-reply.svg' alt='i' width={'15px'} height={'15px'} />   Reply</p>
                </div>
               )   : (
                   <div className={classes.img_delete}>
                        <p className={classes.icons && classes.del}><Image src='/images/icon-delete.svg' alt='i' width={'15px'} height={'15px'}/>Delete</p>
                        <p className={classes.icons && classes.blu}><Image src='/images/icon-edit.svg' alt='i' width={'15px'} height={'15px'} />Edit</p>
                    </div>
               )
            }
        </div>
     );
}
 
export default Icons;