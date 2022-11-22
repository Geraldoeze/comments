import classes from './BigEnd.module.css'
import style from './styleBig.module.css'
import Image from 'next/image';
import BigIcon from '../BigContent/BigIcon';

const BigHeading = ({creator}) => {
    
  return (
      
      <div className={classes.BigHeading}>
            <Image
            
            src='/images/avatars/image-amyrobson.png'
            width={'40px'} height={'30px'}
            alt='vero'  />
    
        <h4 className={style.Bigheading_name}>amyrobot</h4>
            {!creator && <span className={style.Bigcreator_span}>you</span>}
        <p className={style.Bigheading_time}> 2 months ago</p>
    
      
      <BigIcon />
      </div>
    
  ) 
}
 
export default BigHeading;