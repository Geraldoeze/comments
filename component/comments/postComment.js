import classes from "./CommentForm.module.css";
import Image from "next/image";
import React, { useState } from "react";
import { useHttpClient } from "../../hook/http-hook";

const PostComment = ({ creator, headData, reload }) => {
  const [value, setValue] = useState();
  const [replyTo, setReplyTo] = useState(headData);

  const { sendRequest, isLoading } = useHttpClient();

  const UserDetails = creator[0];
  const imageSrc = UserDetails.image.png;

  // This removes the dot ./ so that next can access the image from public folder
  const imageContent = imageSrc.slice(1, imageSrc.length);

  const inputFocusBigStyle = () => {
    document.getElementById("BigStyleComment").focus();
  };

  const inputFocusStyle = () => {
    document.getElementById("StyleComment").focus();
  };
  
  const submitCommentHandler = async () => {
    
    const commentBody = {
      ide: 76,
      content: value,
      createdAt: Date.now(),
      score: 0,
      user: creator[0],
      replies: 'something good',
      comment: 'creator'
    };
    if (value?.length >= 2) {
      await sendRequest(
        "/api/Comments/",
        "POST",
        JSON.stringify(commentBody)
      );
      
      window.location.reload();
    } else console.log('Invalid Inputs')
  };

  return (
    <>
      <div className={classes.commentForm}>
        <div className={classes.inputFile} onClick={inputFocusStyle}>
          <textarea
            className={classes.text_style}
            type="text"
            onChange={(e) => setValue(e.target.value)}
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
