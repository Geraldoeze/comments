
import Article from "../UI/smallContent/Article";
import BigEnd from "../UI/BigContent/BigEnd";

import ButtonSelect from "../UI/smallContent/ButtonSelect";
import Heading from "../UI/smallContent/Heading";
import classes from './Comments.module.css'
import Replies from "../UI/smallContent/Replies/Replies";


const CommentList = ({details, creator}) => {

    const detailData = details[0].comments;
    console.log(creator)
    return ( 
        <>
        {/* by putting a question mark ? in front of .map we ensure that an error isn't thrown if the value is undefined */}
            { detailData?.map((val, id) => { 
                console.log(val)
                return (
                    <>
                    <div className={classes.Comments}  key={val.id}> 
                       <Heading 
                            headData={val.user} 
                            create={val.createdAt}
                            currentUser={creator}
                        />
                       <Article
                         articleData={val.content}
                        />
                      <ButtonSelect 
                        score={val.score} 
                        currentUser={creator} 
                        userData={val.user}
                       />
                     </div> 
                     { (val.replies.length >= 1) &&
                       <div className={classes.response}>
                           <div className={classes.replies}>
                        <Replies reply={val} creator={creator} />
                        </div>
                    </div>
                                                     
                     } 
                        
                     </>
                )
            })
                
            }
                
         
         {/* <div className={classes.showBig}>
             <BigEnd />
            
         </div> */}
        </>
            
        
    
     );
}
 
export default CommentList;