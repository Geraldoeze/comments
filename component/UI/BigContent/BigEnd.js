import Article from "../smallContent/Article";
import ButtonBig from "./ButtonBig";
import BigHeading from '../BigContent/BigHeading'
import classes from './BigEnd.module.css'


const BigEnd = ({dataComment, currentUser, show}) => {
    
    return (
        <div className={classes.Bigend}>
            <ButtonBig number={dataComment.score}/>
            <div className={classes.content}>
                <BigHeading     showButton={show}  ID={dataComment.id}  headData={dataComment.user}  create={dataComment.createdAt} 
                    currentUser={currentUser} valuee={dataComment} />
                <Article  articleData={dataComment.content}  replyTo={false} />
            </div>
        </div>
      );
}
 
export default BigEnd;