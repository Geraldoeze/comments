
import Article from "../UI/smallContent/Article";
import BigEnd from "../UI/BigContent/BigEnd";

import React, {useState} from 'react';

import ButtonSelect from "../UI/smallContent/ButtonSelect";
import Heading from "../UI/smallContent/Heading";
import classes from './Comments.module.css'
import Replies from "../UI/smallContent/Replies/Replies";
import CommentForm from "./CommentForm";
import BigReply from "../UI/BigContent/BigReply/BigReply";
import Contents from "../UI/smallContent/Contents";


const CommentList = ({details, creator}) => {

    const detailData = details[0].comments;
    const [hideButton, setHideButton] = useState(null);
    const [hideBigButton, setHideBigButton] = useState(null);

    const showButton = (id) => {
        setHideButton(id);
    }
    const showBigButton = (id) => {
        setHideBigButton(id)
    }

    
    return ( 
        <>
        {/* by putting a question mark ? in front of .map we ensure that an error isn't thrown if the value is undefined */}
            {/* { detailData?.map((value, id) => {  
                return (
                    <>
                    <div key={value.id} id={id}>
                        <div className={classes.Comments}  > 
                            <Contents  val={value} currentUser={creator} openButton={showButton} />
                        </div> 
                        { (hideButton == value.id) && <CommentForm creator={details} headData={value.user} /> }     
                    </div>
                        { (value.replies.length >= 1) &&
                            <div className={classes.response}>
                                <div className={classes.replies}>
                                <Replies reply={value} creator={creator} details={details} />
                                </div>
                            </div>                       
                        }
                    </>
                )
            }) 
        }  */}
            { detailData?.map((val, id) => {         
                 return (
                     <>
                     <div key={Math.floor(Math.random() * 10)} >
                        <div className={classes.showBig} >
                            <BigEnd  dataComment={val}  show={showBigButton} currentUser={creator}/>
                        </div>
                        { (hideBigButton == val.id) && <CommentForm creator={details} headData={val.user} /> }   
                     </div>  
                        { (val.replies.length >= 1) &&
                        <div className={classes.Bigresponse} >
                            <div className={classes.Bigreplies}>
                                <BigReply reply={val} creator={creator} details={details}/>
                            </div>
                        </div>                       
                        }
                     </>
                 )
            })
            }
        </>
     );
}
 
export default CommentList;