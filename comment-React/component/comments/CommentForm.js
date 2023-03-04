import classes from "./CommentForm.module.css";
import Image from "next/image";
import React, { useState, useRef, useContext } from "react";
import { PostContext } from "../../hook/context-hook";
import { useHttpClient } from "../../hook/http-hook";
import { v4 as uuidv4 } from "uuid";
import { SendPostReplies, SendUpdateReplies, SendUpdateComments } from "./postUpdate";

const RandomId = () => 100000 + Math.floor(Math.random() * 900000);

const CommentForm = ({
  creator,
  headData,
  openButton,
  creatorId,
  show,
  onClose,
}) => {
  
  const head = headData?.username;

  const Ref = useRef("");
  const bigRef = useRef("");

  const [send, setSend] = useState(`@${head}, `);

  const [replyTo, setReplyTo] = useState(headData);

  const [update, setUpdate] = useState(`@${creatorId.replyingTo}, `);

  const { comment, setComment, replys, setReplys } = useContext(PostContext);
  const { sendRequest, isLoading } = useHttpClient();

  const UserDetails = creator[0];
  const imageSrc = UserDetails.image.png;

  // This removes the dot ./ so that next can access the image from public folder
  const imageContent = imageSrc.slice(1, imageSrc.length);

  // get new reply created
  const getNewReply = (value) => {
    const newValue = { ...value };
    setReplys([...replys, newValue]);
  };

  // get reply edited
  const getUpdateReply = (value) => {
  
    const findOne = replys?.filter((val) => val.ide === value.ide)
    const newUpdate = {...findOne[0], content: value.content, createdAt: value.createdAt}
    
    setReplys((reply) => {
      const filtered = reply?.filter((del) => del.ide !== newUpdate.ide);
      
      return [...filtered, newUpdate];
    });
  };

  
    // // get comment edited
    const getEditContent = (value) => {
      const findOne = comment?.filter((val) => val.ide === value.ide)
      const newUpdate = {...findOne[0], content: value.content, createdAt: value.createdAt}
      
      setComment((com) => {
        const filtered = com?.filter((del) => del.ide !== newUpdate.ide);
        
        return [...filtered, newUpdate];
      });
    };

  const submitSmallReplyHandler = async (e, replyTo) => {
    const newVal = Ref.current?.value;
    const valuelen = newVal.split(", ")[1]?.trim();
    show();
    const replyBody = {
      ide: RandomId(),
      content: valuelen,
      createdAt: Date.now(),
      score: 0,
      user: creator[0],
      replyingTo: replyTo,
    };

    const newValue = { ...replyBody };
    getNewReply(newValue);
    SendPostReplies(replyBody);
    openButton(null);
    onClose();
  };

  const submitSmallUpdateHandler = async (e) => {
    e.preventDefault();
    show();
    const updatVal = Ref.current.value;
    try {
      if (typeof creatorId?.replyingTo === "string") {
        const updateValue = updatVal?.split(",")[1]?.trim();
        const UpdatedBody = {
          ide: creatorId.ide,
          content: updateValue,
          createdAt: Date.now(),
        };
        getUpdateReply(UpdatedBody)
        if (updateValue?.length >= 3) {
          SendUpdateReplies(UpdatedBody)
        }
      } else if (typeof creatorId?.replies === "string") {
        const updateCommentValue = updatVal
        const UpdatedBody = {
          ide: creatorId.ide,
          content: updateCommentValue,
          createdAt: Date.now(),
        };
        getEditContent(UpdatedBody)
        if (updateCommentValue?.length >= 3) {
          SendUpdateComments(UpdatedBody)
        }
      }
    } catch (err) {
      console.log(err);
    }
    openButton(null);
    onClose();
  };

  const submitBigUpdateHandler = async (e) => {
    e.preventDefault();
    show();
    const updatVal = bigRef.current.value;
    try {
      if (typeof creatorId?.replyingTo === "string") {
        const updateValue = updatVal?.split(",")[1]?.trim();
        const UpdatedBody = {
          ide: creatorId.ide,
          content: updateValue,
          createdAt: Date.now(),
        };
        getUpdateReply(UpdatedBody)

        if (updateValue?.length >= 3) {
          SendUpdateReplies(UpdatedBody)
        }
      } else if (typeof creatorId?.replies === "string") {
        const updateCommentValue = updatVal
        const UpdatedBody = {
          ide: creatorId.ide,
          content: updateCommentValue,
          createdAt: Date.now(),
        };
        getEditContent(UpdatedBody)
        if (updateCommentValue?.length >= 3) {
          SendUpdateComments(UpdatedBody)
        }
      }
    } catch (err) {
      console.log(err);
    }
    openButton(null);
    onClose();
  };

  const submitBigReplyHandler = async (e, replyTo) => {
    const newVal = bigRef.current?.value;
    const valuelen = newVal.split(", ")[1]?.trim();;
    show();
    const replyBody = {
      ide: RandomId(),
      content: valuelen,
      createdAt: Date.now(),
      score: 0,
      user: creator[0],
      replyingTo: replyTo,
    };

    const newValue = { ...replyBody };
    getNewReply(newValue);
    SendPostReplies(replyBody);
    openButton(null);
    onClose();
  };

  const checkValue = update === "@undefined, " ? "" : update;

  return (
    <>
      <div className={classes.commentForm} key={uuidv4()}>
        {replyTo.username !== creator[0].username ? (
          <>
            <div className={classes.inputFile}>
              <textarea
                defaultValue={send}
                type="text"
                ref={Ref}
                className={classes.text_style}
                id="commentSend"
              />
            </div>
            <div className={classes.iconButton}>
              <Image
                src={imageContent}
                width={"40px"}
                alt="ball"
                height={"35px"}
              />
              <button
                type="submit"
                onClick={(e) => submitSmallReplyHandler(e, headData.username)}
                className={classes.buttonId}
              >
                SEND
              </button>
            </div>
          </>
        ) : (
          <>
            <div className={classes.inputFile}>
              <textarea
                defaultValue={checkValue}
                type="text"
                ref={Ref}
                className={classes.text_style}
                id="commentUpdate"
              />
            </div>
            <div className={classes.iconButton}>
              <Image
                src={imageContent}
                width={"40px"}
                alt="ball"
                height={"35px"}
              />
              <button
                type="submit"
                onClick={submitSmallUpdateHandler}
                className={classes.buttonId}
              >
                UPDATE
              </button>
            </div>
          </>
        )}
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
        {replyTo.username !== creator[0].username ? (
          <>
            <div className={classes.BiginputFile}>
              <textarea
                defaultValue={send}
                ref={bigRef}
                className={classes.text_style}
                id="BigcommentReply"
              />
            </div>

            <button
              type="submit"
              onClick={(e) => submitBigReplyHandler(e, headData.username)}
              className={classes.buttonId}
            >
              SEND
            </button>
          </>
        ) : (
          <>
            <div className={classes.BiginputFile}>
              <textarea
                defaultValue={checkValue}
                ref={bigRef}
                className={classes.text_style}
                id="BigcommentUpdate"
              />
            </div>

            <button
              type="submit"
              onClick={(e) => submitBigUpdateHandler(e, headData.username)}
              className={classes.buttonId}
            >
              UPDATE
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default CommentForm;
