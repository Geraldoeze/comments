import classes from './CommentForm.module.css';
import Image from 'next/image';
import React, {useState} from 'react';

const CommentForm = ({creator, headData}) => {
    const [comment, setComment] = useState('');


    const UserDetails = creator[0].currentUser;
    const imageSrc = UserDetails.image.png
    // This removes the dot ./ so that next can access the image from public folder
    const imageContent = imageSrc.slice(1, imageSrc.length)
    console.log(UserDetails)

    const submitHandler = (e) => {
        e.preventDefault();
        
    }

    

    
    return (
        <div className={classes.commentForm}>
        <form onSubmit={submitHandler}>
            <div className={classes.inputFile}>
            {(typeof headData === 'object') && <span>@{headData.username},</span> }
            <input 
              type='text'
              placeholder='Add something'
              
              onChange={(e) => setComment(e.target.value)}
               />
            </div>
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
        </form>
        </div>
     );
}
 
export default CommentForm;