// our-main-domain/
import CommentList from "../component/comments/CommentsList";
import "../styles/home.module.css";
import "@fontsource/rubik";
import React, { useState, useEffect } from "react";
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

  return (
    
      <div>
        <Modal show={showModal} > <LoadingSpinner /></Modal>
        <CommentList show={openModal} onClose={hideModal} details={comments} creator={currentUser} reply={replies} />
        <PostComment show={openModal} onClose={hideModal} creator={currentUser}  />
      </div>
        
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
