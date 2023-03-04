import BigEnd from "../BigEnd";
import classes from "./BigReply.module.css";
import CommentForm from "../../../comments/CommentForm";
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


const BigReply = ({ replyTo, creator, replies, show, onClose }) => {
  const [bigButton, setBigButton] = useState(null);
  // const responseData = reply.replies
  const showBigbutton = (value) => {
    setBigButton(value);
  };

  let subReplier;

  return (
    <React.Fragment key={uuidv4()}>
      {replies
        .filter((rep, idx) => rep.replyingTo === replyTo)
        .map((val, id) => {
          subReplier = val.user.username;
          return (
            <React.Fragment key={uuidv4()}>
              <div key={uuidv4()} className={classes.bigContent}>
                <div className={classes.BigCover} key={uuidv4()}>
                  <BigEnd
                    dataComment={val}
                    currentUser={creator}
                    show={showBigbutton}
                  />
                </div>
                {bigButton === val.ide && (
                  <CommentForm
                    show={show}
                    onClose={onClose}
                    creatorId={val}
                    creator={creator}
                    headData={val.user}
                    openButton={showBigbutton}
                  />
                )}
              </div>

              {replies
                .filter((rep, idx) => rep.replyingTo === val.user.username)
                .map((val, id) => {
                  return (
                    <div key={uuidv4()}>
                      <div className={classes.BigCover} key={uuidv4()}>
                        <BigEnd
                          dataComment={val}
                          currentUser={creator}
                          show={showBigbutton}
                        />
                      </div>
                      {bigButton === val._id && (
                        <CommentForm
                          show={show}
                          onClose={onClose}
                          creatorId={val}
                          creator={creator}
                          headData={val.user}
                          openButton={showBigbutton}
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

export default BigReply;
