// our-main-domain/
import CommentList from '../component/comments/CommentsList';
import '../styles/home.module.css'
import "@fontsource/rubik";
import React, {useEffect, useState} from 'react'
import { DataComment as dataApi } from '../data/data'
import CommentForm from '../component/comments/CommentForm';

function Homepage(props) {

    const [backendComments, setBackendComment] = useState([])
    const [verify, setVerify] = useState(false)
    
    useEffect(() => {
        const fetchdata = async () => {
            const data =  await dataApi()
            setBackendComment(data)
            setVerify(true)
        }
        fetchdata()
    }, [])
    
    const complete = verify ? (
        <CommentList details={backendComments} creator={backendComments[0].currentUser} />) : (<p>loading</p>
    )
    
    console.log(backendComments)
    return (
        <div>    
            {complete}
            <CommentForm creator={backendComments}/>
        </div>
    )
}


export default Homepage;

// export async function getStaticProps() {    
//     const dataResult =  await dataApi()
    
//     return {
//       props: {dataComments: dataResult[0].comments,
//             currentUser: dataResult[0].currentUser
//         }, // will be passed to the page component as props
//     }
//   }