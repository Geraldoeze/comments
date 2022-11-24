import classes from './styless.module.css'

import Image from 'next/image';

const Heading = ({creator, content, headData}) => {
    
    return ( 
        <div className={classes.heading}>
            
            <Image
                
                src='/images/avatars/image-amyrobson.png'
                width={'40px'} height={'30px'}
                alt='vero'  />
            <h4 className={classes.heading_name}>amyrobot</h4>
           
           
            {!creator && <span className={classes.creator_span}>you</span>}
            <p className={classes.heading_time}>{headData.createdAt} </p>
            
        </div>
     );
}
 
export default Heading;