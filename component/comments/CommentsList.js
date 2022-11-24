
import Article from "../UI/smallContent/Article";
import BigEnd from "../UI/BigContent/BigEnd";

import ButtonSelect from "../UI/smallContent/ButtonSelect";
import Heading from "../UI/smallContent/Heading";
import classes from './Comments.module.css'



const CommentList = ({details}) => {

    const detailData = details[0].comments;
    console.log(detailData[0].comments)
    return ( 
        <>
            { detailData.map((val, id) => {
                console.log(val.id)
                return (
                    <div className={classes.Comments}  key={val.id}> 
                        <Heading  headData={val} />
                        <Article  articleData ={val}/>
                        <ButtonSelect />
                    </div>      
                )
            })
                
            }
                
         
         <div className={classes.showBig}>
             <BigEnd />
            
         </div>
        </>
            
        
    
     );
}
 
export default CommentList;