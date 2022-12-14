import classes from './CommentForm.module.css';
import Image from 'next/image';
import React, {useState, useRef} from 'react';



const CommentForm = ({creator, headData}) => {
   
    const inputRef = useRef(null);

    const [comment, setComment] = useState(null);
    const UserDetails = creator[0].currentUser;
    const imageSrc = UserDetails.image.png
    // This removes the dot ./ so that next can access the image from public folder
    const imageContent = imageSrc.slice(1, imageSrc.length)
    

    const inputFocus = () => {
      document.getElementById('Bigcomment').focus();
    }
  
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(inputRef.current.value);
        
    }
    console.log(comment)
     
    return (
        <>
        {/* <div className={classes.commentForm} key={Math.floor(Math.random() * 10)}>
                <form onSubmit={submitHandler}>
                    <div className={classes.inputFile}>
                        {(typeof headData === 'object') && <div>@{headData.username},</div> }
                      <input type='text' placeholder='Add something' id='comment' ref={inputRef} /> 
                    </div>
                    <div className={classes.iconButton}>
                        <Image src= {imageContent} width={'35px'}  alt='ball' height={'35px'} />
                        <button className={classes.buttonId}>SEND</button>
                    </div>
                </form>
            </div> */}
        
            
                <div className={classes.BigcommentForm}>
                <div>
              <Image src={imageContent} width={'35px'} alt={'baller'} height={'35px'} />
              </div>
                <div className={classes.BiginputFile} onClick={inputFocus}>
              {(typeof headData === 'object') && <label className={classes.labelData}>@{headData.username},</label> }
              <input className={classes.inputData} type='text' id='Bigcomment' ref={inputRef}/>
                </div>
                  <button type='submit' onClick={submitHandler} className={classes.buttonId}>SEND</button>
                </div>
             
        </>
     );
}
 
export default CommentForm;


