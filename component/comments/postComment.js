import classes from "./CommentForm.module.css";
import Image from "next/image";
import React, { useState, useContext } from "react";
import { useHttpClient } from "../../hook/http-hook";
import { PostContext } from "../../hook/context-hook";

const RandomId = 100000 + Math.floor(Math.random() * 900000);

const PostComment = ({ creator }) => {
  const {comment, setComment} = useContext(PostContext);
  
  const [value, setValue] = useState('');
  

  const { sendRequest, isLoading } = useHttpClient();

  const UserDetails = creator[0];
  const imageSrc = UserDetails?.image.png;

  // This removes the dot ./ so that next can access the image from public folder
  const imageContent = imageSrc?.slice(1, imageSrc.length);

  const inputFocusBigStyle = () => {
    document.getElementById("BigStyleComment").focus();
  };

  const inputFocusStyle = () => {
    document.getElementById("StyleComment").focus();
  };
  
  const submitCommentHandler = async () => {
    
    const commentBody = {
      content: value,
      createdAt: Date.now(),
      score: 0,
      user: creator[0],
      replies: 'something good',
      comment: 'creator'
    };

     // get new comment created
    const newValue = { ...commentBody, _id: RandomId.toString() };
    setComment([...comment, newValue]);
  
    if (value?.length >= 2) {
      await sendRequest(
        "/api/comment/",
        "POST",
        JSON.stringify(commentBody)
      );
      
      
    } else console.log('Invalid Inputs')
    setValue('');
  };

  return (
    <>
      <div className={classes.commentForm}>
        <div className={classes.inputFile} onClick={inputFocusStyle}>
          <textarea
            className={classes.text_style}
            type="text"
            onChange={(e) => setValue(e.target.value)}
            value={value}
            placeholder="Add something"
            id="StyleComment"
          />
        </div>
        <div className={classes.iconButton}>
          <Image src={imageContent} width={"40px"} alt="ball" height={"35px"} />
          <button
            type="submit"
            onClick={submitCommentHandler}
            className={classes.buttonId}
          >
            SEND
          </button>
        </div>
      </div>

      <div className={classes.BigcommentForm}>
        <div>
          <Image
            src={imageContent}
            width={"35px"}
            alt={"baller"}
            height={"35px"}
          />
        </div>
        <div className={classes.BiginputFile} onClick={inputFocusBigStyle}>
          <textarea
            className={classes.text_style}
            type="text"
            placeholder="Add something"
            id="BigStyleComment"
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <button
          type="submit"
          onClick={submitCommentHandler}
          className={classes.buttonId}
        >
          SEND
        </button>
      </div>
    </>
  );
};

export default PostComment;
