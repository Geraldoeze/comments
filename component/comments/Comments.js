import { useEffect, useState } from "react";


import Article from "../UI/Article";
import BigEnd from "../UI/BigEnd";
import ButtonBig from "../UI/ButtonBig";
import ButtonSelect from "../UI/ButtonSelect";
import Heading from "../UI/Heading";
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