import { useEffect, useState } from "react";
import Card from "../UI/Card";

import './Comments.css'


const Comments = ({currentUserId}) => {
    const [backendComments, setBackendComment] = useState([])

    useEffect(() => {

    }, [])
    return ( 
        <Card>
            <div className="User_info">
                <img src="image-amyrobson.png" alt="baller"/>
                <h4>amyrobson</h4>
                <p>I month ago</p>
            </div>
            <article>
            Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.
            </article>
            <div>

            </div>
        </Card>
            
        
     );
}
 
export default Comments;