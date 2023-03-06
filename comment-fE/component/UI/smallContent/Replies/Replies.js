import CommentForm from "../../../comments/CommentForm";
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Contents from "../Contents";
import classes from "./Replies.module.css";

const Replies = ({ replyTo, creator, replies, show, onClose }) => {
  const [button, setButton] = useState(null);

  const showComment = (value) => {
    setButton(value);
  };

  let subReplier;

  return (
    <React.Fragment key={uuidv4()}>
      {replies
        .filter((rep) => rep.replyingTo === replyTo)
        .map((val) => {
          subReplier = val.user.username;

          return (
            <React.Fragment key={uuidv4()}>
              <div key={uuidv4()} className={classes.reply_content}>
                <Contents
                  val={val}
                  currentUser={creator}
                  openButton={showComment}
                />
              </div>
              {button == val.ide && (
                <CommentForm
                  show={show}
                  onClose={onClose}
                  creatorId={val}
                  creator={creator}
                  headData={val.user}
                  openButton={showComment}
                />
              )}

              {replies
                .filter((rep, idx) => rep.replyingTo === val.user.username)
                .map((val, id) => {
                  return (
                    <div key={uuidv4()}>
                      <div key={uuidv4()} className={classes.reply_content}>
                        <Contents
                          val={val}
                          currentUser={creator}
                          openButton={showComment}
                        />
                      </div>
                      {button == val.ide && (
                        <CommentForm
                          show={show}
                          onClose={onClose}
                          creatorId={val}
                          creator={creator}
                          headData={val.user}
                          openButton={showComment}
                        />
                      )}
                    </div>
                  );
                })}
            </React.Fragment>
          );
        })}
    </React.Fragment>
  );
};

export default Replies;
