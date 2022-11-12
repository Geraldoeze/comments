import { useEffect, useState } from "react";


import Article from "../UI/Article";
import ButtonBig from "../UI/ButtonBig";
import ButtonSelect from "../UI/ButtonSelect";
import Heading from "../UI/Heading";
import './Comments.css'



const Comments = ({currentUserId}) => {
    const [backendComments, setBackendComment] = useState([])

    useEffect(() => {

    }, [])
    return (
        <>
        <div className="Comments"> 
            <Heading />
            <Article />
            <ButtonSelect />
        </div>      
        <ButtonBig />
        </>

     );
}
 
export default Comments;