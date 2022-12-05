
import classes from './styleBig.module.css'
import Image from 'next/dist/client/image';


const styles = {
    "main-style": classes.icons,
    "sub-style-red": classes.del,
    "sub-style-blue": classes.blu
}


const BigIcons = ({creator, user, openButton, IDE}) => {
 
    const buttonID = (event) => {
        if (event.target.id == IDE ) {
           return openButton(IDE)
        }
    }

    return ( 
        <div className={classes.bigCover}>
            {!(creator.username === user.username) ? (
                <div className={classes.bigIcon}>
                    <p onClick={buttonID} id={IDE}  className={`${styles['main-style']} ${styles['sub-style-blue']}`} ><Image src='/images/icon-reply.svg' alt='i' width={'15px'} height={'15px'} />   Reply</p>
                </div>
               )   :  (
                    <div className={classes.bigIcon}>
                        <p className={`${styles['main-style']} ${styles["sub-style-red"]}`}><Image src='/images/icon-delete.svg' alt='i' width={'15px'} height={'15px'}/>  Delete</p>
                        <p className={`${styles["main-style"]} ${styles["sub-style-blue"]}`}><Image src='/images/icon-edit.svg' alt='i' width={'15px'} height={'15px'} />  Edit</p>
                    </div>
               )
            }
          </div>
     );
}


export default BigIcons;