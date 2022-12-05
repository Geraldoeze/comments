import CommentForm from "../../../comments/CommentForm";
import React, {useState} from 'react'

import Contents from "../Contents";
import classes from './Replies.module.css';

const Replies = ({reply, creator, details}) => {
    const [button, setButton] = useState(null)
    const responseData = reply.replies

    const showComment = (value) => {
        setButton(value)   
    }
    
    return ( 
        <>
        {responseData.map((val, id) => {
        
            return (
                <>
            <div key={val.id} className={classes.reply_content}>
                <Contents val={val} currentUser={creator} openButton={showComment}
                 />
            </div>
            { (button == val.id) && <CommentForm creator={details} headData={val.user} /> }     
            </>
            )
        })}
        </>
     );
}
 
export default Replies;