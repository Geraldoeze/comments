import classes from "./CommentForm.module.css";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { useHttpClient } from "../../hook/http-hook";

const CommentForm = ({
  creator,
  headData,
  openButton,
  creatorId,
  show,
  onClose,
}) => {
  const [value, setValue] = useState({
    init: `@${headData?.username}, `,
    val: "",
  });
  const [replyTo, setReplyTo] = useState(headData);
  const [update, setUpdate] = useState({
    init: `@${creatorId.replyingTo}, `,
    val: "",
  });

  const { sendRequest, isLoading } = useHttpClient();

  const UserDetails = creator[0];
  const imageSrc = UserDetails.image.png;

  // This removes the dot ./ so that next can access the image from public folder
  const imageContent = imageSrc.slice(1, imageSrc.length);
  const inputFocusBigReply = () =>
    document.getElementById("BigcommentReply").focus();
  const inputFocusBigUpdate = () =>
    document.getElementById("BigcommentUpdate").focus();

  const inputFocusReply = () => document.getElementById("commentReply").focus();
  const inputFocusUpdate = () =>
    document.getElementById("commentUpdate").focus();

  const submitReplyHandler = async (e, replyTo) => {
    const replyValue = value.val.split(",")[1]?.trim();

    show();
    const replyBody = {
      ide: 76,
      content: replyValue,
      createdAt: Date.now(),
      score: 0,
      user: creator[0],
      replyingTo: replyTo,
    };

    if (replyValue?.length >= 2) {
      const response = await sendRequest(
        "/api/Replies/",
        "POST",
        JSON.stringify(replyBody)
      );
      window.location.reload();
      console.log(response);
    } else console.log("Invalid Input");

    openButton(null);
    onClose();
  };

  const submitUpdateHandler = async (e) => {
    show();
    try {
      if (typeof creatorId?.replyingTo === "string") {
        const updateValue = update.val.split(",")[1]?.trim();
        e.preventDefault();
        const commentBody = {
          id: creatorId._id,
          content: updateValue,
          createdAt: Date.now(),
        };
        if (updateValue?.length >= 3) {
          // send replies request
          await sendRequest(
            `/api/Replies/`,
            "PATCH",
            JSON.stringify(commentBody)
          );
          window.location.reload();
        }
      } else if (typeof creatorId?.replies === "string") {
        const updateCommentValue = update.val;
        e.preventDefault();
        const updateCommentBody = {
          id: creatorId._id,
          content: updateCommentValue,
          createdAt: Date.now(),
        };
        if (updateCommentValue?.length >= 3) {
          // send comment
          await sendRequest(
            `/api/Comment/`,
            "PATCH",
            JSON.stringify(updateCommentBody)
          );
          window.location.reload();
        }
      }
    } catch (err) {
      console.log(err);
    }
    openButton(null);
    onClose();
  };

  const checkValue = update.init === "@undefined, " ? "" : update.init;

  return (
    <>
      <div className={classes.commentForm} key={uuidv4()}>
        {replyTo.username !== creator[0].username ? (
          <>
            <div className={classes.inputFile} onClick={inputFocusReply}>
              <textarea
                className={classes.text_style}
                value={value.init}
                type="text"
                placeholder="Add something"
                id="commentReply"
                onChange={(e) => setValue(e.target.value)}
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
                onClick={(e) => submitReplyHandler(e, headData.username)}
                className={classes.buttonId}
              >
                SEND
              </button>
            </div>
          </>
        ) : (
          <>
            <div className={classes.inputFile} onClick={inputFocusUpdate}>
              <textarea
                value={checkValue}
                type="text"
                onChange={(e) => setUpdate({ val: e.target.value })}
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
                onClick={submitUpdateHandler}
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
            <div className={classes.BiginputFile} onClick={inputFocusBigReply}>
              <textarea
                value={value.init}
                onChange={(e) => setValue({ val: e.target.value })}
                className={classes.text_style}
                id="BigcommentReply"
              />
            </div>

            <button
              type="submit"
              onClick={(e) => submitReplyHandler(e, headData.username)}
              className={classes.buttonId}
            >
              SEND
            </button>
          </>
        ) : (
          <>
            <div className={classes.BiginputFile} onClick={inputFocusBigUpdate}>
          
              <textarea
                value={checkValue}
                className={classes.text_style}
                type="text"
                id="BigcommentUpdate"
                onChange={(e) => setUpdate({ val: e.target.value })}
              />
            </div>
            <button
              type="submit"
              onClick={submitUpdateHandler}
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
