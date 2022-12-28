import Article from "../smallContent/Article";
import ButtonBig from "./ButtonBig";
import BigHeading from "../BigContent/BigHeading";
import classes from "./BigEnd.module.css";
import { v4 as uuidv4 } from 'uuid';


const BigEnd = ({ dataComment, currentUser, show }) => {
  return (
    <div className={classes.Bigend} key={uuidv4()}>
      <ButtonBig number={dataComment.score} creatorID={dataComment} />
      <div className={classes.content}>
        <BigHeading
          showButton={show}
          creatorID={dataComment}
          headData={dataComment.user}
          create={dataComment.createdAt}
          currentUser={currentUser}
          valuee={dataComment}
        />
        <Article articleData={dataComment.content} replyTo={dataComment.replyingTo} />
      </div>
    </div>
  );
};

export default BigEnd;
