// our-main-domain/
import CommentList from '../component/comments/CommentsList';
import '../styles/home.module.css'
import "@fontsource/rubik";
import React, {useEffect, useState} from 'react'
import { DataComment as dataApi} from '../data/data'

function Homepage(props) {

    const [backendComments, setBackendComment] = useState([])
    const [verify, setVerify] = useState(false)
    
    
    
    const complete = verify ? <CommentList details={backendComments} /> : <p>loading</p>
    
    console.log(props)
    return (
        <div>    
            {complete}
        </div>
    )
}


export default Homepage;


export async function getStaticProps() {    
    const dataResult =  await dataApi()
    
    return {
      props: {data: dataResult}, // will be passed to the page component as props
    }
}
