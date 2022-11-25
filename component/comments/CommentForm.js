import classes from './CommentForm.module.css';
import Image from 'next/image';
import React, {useState} from 'react';

const CommentForm = ({creator}) => {
    const UserDetails = creator[0].currentUser;
    const imageSrc = UserDetails.image.png
    // This removes the dot ./ so that next can access the image from public folder
    const imageContent = imageSrc.slice(1, imageSrc.length)
    console.log(UserDetails)


    return (
        <div className={classes.commentForm}>
        <form>
            <input 
              type='text'
              placeholder='Add something'
              className={classes.inputFile} />
        </form>
        <div className={classes.iconButton}>
            <Image 
                src= {imageContent}
                width={'40px'}  
                alt='ball'
                height={'30px'}
                
            />
            <button className={classes.buttonId}>
                SEND
            </button>
        </div>
        
        </div>
     );
}
 
export default CommentForm;