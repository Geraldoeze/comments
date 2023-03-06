import BigEnd from "../UI/BigContent/BigEnd";

import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import { PostContext } from "../../hook/context-hook";
import classes from "./Comments.module.css";
import Replies from "../UI/smallContent/Replies/Replies";
import CommentForm from "./CommentForm";
import BigReply from "../UI/BigContent/BigReply/BigReply";
import Contents from "../UI/smallContent/Contents";

const CommentList = ({ creator, show, onClose }) => {
  const { comment, replys } = useContext(PostContext);

  const [hideButton, setHideButton] = useState(null);
  const [hideBigButton, setHideBigButton] = useState(null);

  const showButton = (id) => {
    setHideButton(id);
  };
  const showBigButton = (id) => {
    setHideBigButton(id);
    // return id;
  };

  return (
    <>
      {/* by putting a question mark ? in front of .map we ensure that an error isn't thrown if the value is undefined */}
      {comment?.map((value) => {
        
        return (
          <React.Fragment key={uuidv4()}>
            <div key={uuidv4()} className={classes.smallContent}>
              <div className={classes.Comments}>
                <Contents
                  val={value}
                  currentUser={creator}
                  openButton={showButton}
                />
              </div>
              {hideButton == value.ide && (
                <CommentForm
                  show={show}
                  onClose={onClose}
                  creatorId={value}
                  creator={creator}
                  headData={value.user}
                  openButton={showButton}
                />
              )}
            </div>
            <div className={classes.response} key={uuidv4()}>
              <div className={classes.replies}>
                <Replies
                  show={show}
                  onClose={onClose}
                  replyTo={value?.user?.username}
                  creator={creator}
                  replies={replys}
                />
              </div>
            </div>
          </React.Fragment>
        );
      })}

      {comment?.map((val) => {
        return (
          <React.Fragment key={uuidv4()}>
            <div key={uuidv4()} className={classes.bigContent}>
              <div className={classes.showBig}>
                <BigEnd
                  dataComment={val}
                  show={showBigButton}
                  currentUser={creator}
                />
              </div>
              {hideBigButton === val.ide && (
                <CommentForm
                  show={show}
                  onClose={onClose}
                  creatorId={val}
                  creator={creator}
                  headData={val.user}
                  openButton={showBigButton}
                />
              )}
            </div>
            <div className={classes.Bigresponse} key={uuidv4()}>
              <div className={classes.Bigreplies}>
                <BigReply
                  show={show}
                  onClose={onClose}
                  replyTo={val?.user?.username}
                  replies={replys}
                  creator={creator}
                />
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default CommentList;
