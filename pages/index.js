import { createContext, useContext } from "react";
import React, { useState, useEffect } from "react";
import axios from "axios";
// import { PostContext } from "../hook/context-hook";
// our-main-domain/
// import CommentList from "../component/comments/CommentsList";
import "../styles/home.module.css";
import "@fontsource/rubik";

// import LoadingSpinner from '../component/UI/LoadingSpinner/LoadingSpinner'

import { initMongoose } from "../lib/mongoose";
import { findAllComments } from "./api/com/comment";
import { findAllReplies } from "./api/rep/replies";
import { getUser } from "./api/user";
// import PostComment from "../component/comments/postComment";
// import Modal from "../component/UI/Modal/Modal";



function Homepage(props) {

  
  const [verify, setVerify] = useState(true);
  

  // LoadingSpinner and Modal
  const [showModal, setShowModal] = useState(false);
  const hideModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);


  // const [comment, setComment] = useState(comments);
  // const [replys, setReplys] = useState(replies);

  
  console.log(props)

  return (
    <h3>balls</h3>
    // <PostContext.Provider value={{comment, setComment, replys, setReplys}}>
    //   <div>
    //     <Modal show={showModal} > <LoadingSpinner /></Modal>
    //     {!!comments && <CommentList show={openModal} onClose={hideModal} creator={currentUser} /> }
    //     <PostComment show={openModal} onClose={hideModal} creator={currentUser}  />
    //   </div>
    //     </PostContext.Provider>
  );
}

export default Homepage;





export async function getServerSideProps() {
  initMongoose();
  const comments = await findAllComments();
  const replies = await findAllReplies();
  const creator = await getUser();
  
  return {
    props: {
      comments: JSON.parse(JSON.stringify(comments)),
      replies: JSON.parse(JSON.stringify(replies)),
      currentUser: JSON.parse(JSON.stringify(creator)),
    }
  };
}
