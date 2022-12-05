import classes from './styless.module.css'

import Image from 'next/image';

const Heading = ({currentUser, create, headData}) => {
    const imageSrc = headData.image.png
    // This removes the dot ./ so that next can access the image from public folder
    const imageContent = imageSrc.slice(1, imageSrc.length);

    return ( 
        <div className={classes.heading}>
            <Image src={imageContent} width={'30px'} height={'30px'}  alt='vero'  />
            <h4 className={classes.heading_name}>{headData.username}</h4>
            {currentUser.username === headData.username && <span className={classes.creator_span}>you</span>}
            <p className={classes.heading_time}>{create}</p>
        </div>
     );
}
 
export default Heading;