import BigEnd from "../BigEnd";
import classes from './BigReply.module.css'
import CommentForm from "../../../comments/CommentForm";
import React, {useState} from 'react';


const BigReply = ({reply, creator, details}) => {
    const [bigButton, setBigButton] = useState(null);
    const responseData = reply.replies
    const showBigbutton = (value) => {
        setBigButton(value)
    }


    return ( 
        <>
        {responseData?.map((val, id) => {
            return (
                <div key={val.id} >
                    <div className={classes.BigCover}>
                        <BigEnd dataComment={val}  currentUser={creator} show={showBigbutton} />
                    </div>
                    { (bigButton == val.id) && <CommentForm creator={details} headData={val.user} /> }     
                </div>
            )
        })}
        </>
     );
}
 
export default BigReply;