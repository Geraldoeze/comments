import classes from './CommentForm.module.css';
import Image from 'next';


const CommentForm = ({creator}) => {
    const UserDetails = creator[0].currentUser;
    const imageSrc = UserDetails.image.png
    // This removes the dot ./ so that next can access the image from public folder
    const imageContent = imageSrc.slice(1, imageSrc.length)



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
                width={'20px'}  
                alt='ball'
                height={'20px'}
            />
            <button>
                SEND
            </button>
        </div>
        
        </div>
     );
}
 
export default CommentForm;