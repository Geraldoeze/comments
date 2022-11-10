import { useEffect, useState } from "react";


import Article from "../UI/Article";
import ButtonSelect from "../UI/Button";
import Heading from "../UI/Heading";
import './Comments.css'



const Comments = ({currentUserId}) => {
    const [backendComments, setBackendComment] = useState([])

    useEffect(() => {

    }, [])
    return (
        <div className="Comments"> 
            <Heading />
            <Article />
            <ButtonSelect />
        </div>      
        
     );
}
 
export default Comments;