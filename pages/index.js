// our-main-domain/
import CommentList from '../component/comments/CommentsList';
import '../styles/home.module.css'
import "@fontsource/rubik";
import React, {useEffect, useState} from 'react'
import { DataComment as dataApi } from '../data/data'
import CommentForm from '../component/comments/CommentForm';
import axios from 'axios';


function Homepage(props) {

    const [verify, setVerify] = useState(true)
    
    // useEffect(() => {
    //     const fetchdata = async () => {
    //         const data =  await dataApi()
    //         setBackendComment(data)    
    //     }

    //     fetchdata()
    //     setVerify(true)
    // }, [])

    // useEffect(()=> {
    //     fetch('https://api.jsonserve.com/lOLs08', { mode: 'no-cors', method:'GET', headers:{'Content-Type': 'application/json'}})
    //     .then((response) => {
    //         console.log(response)
    //     })
    //     .catch(err => console.log(err))
    // },[])
    
    const complete = verify ? (
        <CommentList details={props.dataComments} creator={props.currentUser} />) : (<p>loading</p>
    )
    
    
    return (
        <div>    
            {complete}
            { verify ? <CommentForm creator={props.dataComments}/> : <p>Load</p>}
        </div>
    )
}


export default Homepage;

export async function getStaticProps() {    
    const dataResult =  await dataApi()
    
    return {
      props: {dataComments: dataResult,
            currentUser: dataResult[0].currentUser
        }, // will be passed to the page component as props
    }
  }