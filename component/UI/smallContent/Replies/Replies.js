
import Article from "../Article";
import ButtonSelect from "../ButtonSelect";
import Heading from "../Heading";
import classes from './Replies.module.css';

const Replies = ({reply, creator}) => {
    const responseData = reply.replies
    console.log(responseData)
    return ( 
        <>
        {responseData.map((val, id) => {
            console.log(id)
            return (
            <div key={val.id} className={classes.reply_content}>
                <Heading 
                headData={val.user} 
                create={val.createdAt}
                currentUser={creator}
                />
                <Article
                replyTo={val.replyingTo}
                articleData={val.content}
                />
                <ButtonSelect 
                score={val.score} 
                currentUser={creator} 
                userData={val.user}
                />
            </div>
            )
        })}
       
        </>
     );
}
 
export default Replies;