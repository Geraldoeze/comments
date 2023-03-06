import classes from "./styleBig.module.css";
import Image from "next/dist/client/image";
import Modal from "../Modal/Modal";
import {useState, useContext} from 'react';
import { PostContext } from "../../../hook/context-hook";


const styles = {
  "main-style": classes.icons,
  "sub-style-red": classes.del,
  "sub-style-blue": classes.blu,
};

const BigIcons = ({ creator, user, openButton, IDE }) => {

  
  const {comment, setComment, replys, setReplys} = useContext(PostContext);
  const [showModal, setShowModal] = useState(false);

  const buttonID = (event) => {
    if (event.target.id == IDE.ide) {
      return openButton(IDE.ide);
    }
  };

  const hideModal = () => setShowModal(false)

  const deleteHandler = async () => {
    setShowModal(true)
  }
  
// getDeletedComment
  const deleteContents = (id) => {
    setComment((com) => com?.filter((del) => del.ide !== id));
    console.log(comment);
  };
  
// getDeletedReply
  const deleteReply = (id) => {
    setReplys((reply) => reply?.filter((del) => del.ide !== id));
    console.log(replys);
  };


  const deletePost = async () => {
    
    console.log(IDE)
    const Body = {
      id: IDE.ide
    }
    console.log(IDE.ide)
    if(typeof IDE?.replies === 'string') {
      // change state
      deleteContents(IDE?.ide)

      // send comment delete request
      const response = await fetch(`${process.env.BACKEND_URL}/com/del/${IDE.ide}`,{
        method: "DELETE", 
        
      })
      const data = response.json();
      console.log(data);

    } else if (typeof IDE?.replyingTo === 'string'  ) {
      //  change reply state
      deleteReply(IDE?.ide)

      // send replies delete request
      const response = await fetch(`${process.env.BACKEND_URL}/rep/del/${IDE.ide}`,{
        method: "DELETE"
      })
      const data = response.json();
      console.log(data);
    }
    
  }
  return (
    <>
     <Modal
        Header='Delete Comment' onClose={hideModal} deleteHandler={deletePost}
       title="Are you sure you want to delete this comment? This will remove the comment and can't be undone."
        show={showModal} 
      />
    <div className={classes.bigCover}>
      {!(creator[0].username === user.username) ? (
        <div className={classes.bigIcon}>
          <p
            onClick={buttonID}
            id={IDE.ide}
            className={`${styles["main-style"]} ${styles["sub-style-blue"]}`}
          >
            <Image
              src="/images/icon-reply.svg"
              alt="i"
              width={"15px"}
              height={"15px"}
            />  Reply
          </p>
        </div>
      ) : (
        <div className={classes.bigIcon}>
          <p
            onClick={deleteHandler} 
            className={`${styles["main-style"]} ${styles["sub-style-red"]}`}>
            <Image
              src="/images/icon-delete.svg"
              alt="i"
              width={"15px"}
              height={"15px"}
            />  Delete
          </p>
          <p
            onClick={buttonID}
            id={IDE.ide}
            className={`${styles["main-style"]} ${styles["sub-style-blue"]}`}
          >
            <Image
              src="/images/icon-edit.svg"
              alt="i"
              width={"15px"}
              height={"15px"}
            />  Edit
          </p>
        </div>
      )}
    </div>
    </>
  );
};

export default BigIcons;
