import { createContext, useContext } from "react";
import React, { useState, useEffect } from "react";
import { PostContext } from "../hook/context-hook";
// our-main-domain/
import CommentList from "../component/comments/CommentsList";
import "../styles/home.module.css";
import "@fontsource/rubik";

import LoadingSpinner from '../component/UI/LoadingSpinner/LoadingSpinner'

import { initMongoose } from "../lib/mongoose";
import { findAllComments } from "./api/Comment";
import { findAllReplies } from "./api/Replies";
import { getUser } from "./api/user";
import PostComment from "../component/comments/postComment";
import Modal from "../component/UI/Modal/Modal";



function Homepage({ comments, currentUser, replies }) {

  
  const [verify, setVerify] = useState(true);
  

  // LoadingSpinner and Modal
  const [showModal, setShowModal] = useState(false);
  const hideModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);


  const [comment, setComment] = useState(comments);
  const [replys, setReplys] = useState(replies);
  

  
  
  // // get new comment created
  // const getNewState = (value) => {
  //   const newValue = { ...value };
  //   setComments([...response, newValue]);
  // };

  // // get comment edited
  // const getEditContent = (value) => {
  //   setComments((com) => {
  //     const filtered = com?.filter((del) => del._id !== value._id);
  //     return [...filtered, value];
  //   });
  // };

  // // getDeletedComment
  // const deleteContents = (id) => {
  //   setComments((com) => com?.filter((del) => del._id !== id));
  //   console.log(comments);
  // };

  
  // // get new reply created
  // const getNewReply = (value) => {
  //   const newValue = { ...value };
  //   setResponse([...response, newValue]);
  // };

  // // get reply edited
  // const getEditReply = (value) => {
  //   setResponse((response) => {
  //     const filtered = response?.filter((del) => del._id !== value._id);
  //     return [...filtered, value];
  //   });
  // };

  // // getDeletedReply
  // const deleteReply = (id) => {
  //   setResponse((response) => response?.filter((del) => del._id !== id));
  //   console.log(response);
  // };


  return (
    <PostContext.Provider value={{comment, setComment, replys, setReplys}}>
      <div>
        <Modal show={showModal} > <LoadingSpinner /></Modal>
        {!!comments && <CommentList show={openModal} onClose={hideModal} creator={currentUser} /> }
        <PostComment show={openModal} onClose={hideModal} creator={currentUser}  />
      </div>
        </PostContext.Provider>
  );
}

export default Homepage;





export async function getServerSideProps() {
  await initMongoose();
  const comments = await findAllComments();
  const replies = await findAllReplies();
  const creator = await getUser();
  return {
    props: {
      comments: JSON.parse(JSON.stringify(comments)),
      replies: JSON.parse(JSON.stringify(replies)),
      currentUser: JSON.parse(JSON.stringify(creator)),
    },
  };
}
