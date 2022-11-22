import { useEffect, useState } from "react";


import Article from "../UI/smallContent/Article";
import BigEnd from "../UI/BigContent/BigEnd";
import ButtonBig from "../UI/BigContent/ButtonBig";
import ButtonSelect from "../UI/smallContent/ButtonSelect";
import Heading from "../UI/smallContent/Heading";
import classes from './Comments.module.css'



const Comments = ({currentUserId}) => {
    const [backendComments, setBackendComment] = useState([])

    useEffect(() => {

    }, [])
    return ( 
        <>
        <div className={classes.Comments}> 
            <Heading />
            <Article />
            <ButtonSelect />
        </div>      
        <div className={classes.showBig}>
            <BigEnd />
            
        </div>
        </>

     );
}
 
export default Comments;