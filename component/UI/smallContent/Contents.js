import Heading from "./Heading";
import Article from "./Article";
import ButtonSelect from "./ButtonSelect";
import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const Contents = ({ val, currentUser, openButton }) => {
  
  return (
    <React.Fragment key={uuidv4()}>
      <Heading
        headData={val.user}
        create={val.createdAt}
        currentUser={currentUser}
      />
      <Article articleData={val.content} replyTo={val.replyingTo} />
      <ButtonSelect
        score={val.score}
        currentUser={currentUser}
        userData={val.user}
        show={openButton}
        creatorID={val}
      />
    </React.Fragment>
  );
};

export default Contents;
