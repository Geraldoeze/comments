import classes from "./styless.module.css";
import Image from "next/dist/client/image";
import Modal from "../Modal/Modal";
import {useState} from  'react';
import { useHttpClient } from "../../../hook/http-hook";

const Icons = ({ creator, user, openButton, IDE }) => {
  const { sendRequest, isLoading } = useHttpClient();

  const [showModal, setShowModal] = useState(false);

  const buttonID = (event) => {
    if (event.target.id == IDE._id) {
      return openButton(IDE._id);
    }
  };

  const hideModal = () => setShowModal(false)

  const deleteHandler = async () => {
    setShowModal(true)
  }
  const deletePost = async () => {
    const Body = {
      id: IDE._id
    }
    if(typeof IDE?.replies === 'string') {
      // send comment request
      const response = await sendRequest(`/api/Comments/`, "DELETE", JSON.stringify(Body), null)
      console.log('com del', response);

    } else if (typeof IDE?.replyingTo === 'string'  ) {
      // send replies request
      const response = await sendRequest(`/api/Replies/`, "DELETE", JSON.stringify(Body))
      console.log('rep del', response);
    }
    window.location.reload();
  }
  return (
    <>

    <Modal
        Header='Delete Comment' onClose={hideModal} deleteHandler={deletePost}
       title="Are you sure you want to delete this comment? This will remove the comment and can't be undone."
        show={showModal} />  
  <div className={classes.btn_icon && creator && classes.reply}>
      {!(creator[0].username === user.username) ? (
        <div className={classes.img_reply}>
          <p
            onClick={buttonID}
            id={IDE._id}
            className={classes.icons && classes.blu}
          >
            <Image
              src="/images/icon-reply.svg"
              alt="i"
              width={"15px"}
              height={"15px"}
              className={classes.image_icon}
            /> Reply
          </p>
        </div>
      ) : (
        <div className={classes.img_delete}>
          <p className={classes.icons && classes.del} onClick={deleteHandler}>
            <Image
              src="/images/icon-delete.svg"
              alt="i"
              width={"15px"}
              height={"15px"}
              className={classes.image_icon}
            /> Delete
          </p>
          <p 
            onClick={buttonID}
            id={IDE._id}
            className={classes.icons && classes.blu}>
            <Image
              src="/images/icon-edit.svg"
              alt="i"
              width={"15px"}
              height={"15px"}
              className={classes.image_icon}
            /> Edit
          </p>
        </div>
      )}
    </div>
    </>
    
  );
};

export default Icons;
