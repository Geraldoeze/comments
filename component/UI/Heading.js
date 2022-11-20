import classes from './styless.module.css'

import Image from 'next/image';

const Heading = ({creator}) => {
    
    return ( 
        <div className={classes.heading}>
            
            <Image
                className={classes.igma} 
                src='/images/avatars/image-amyrobson.png'
                width={'40px'} height={'30px'}
                alt='vero'  />
            <h4 className={classes.heading_name}>amyrobot</h4>
            {!creator && <span className={classes.creator_span}>you</span>}
            <p className={classes.heading_time}> 2 months ago</p>
            
        </div>
     );
}
 
export default Heading;