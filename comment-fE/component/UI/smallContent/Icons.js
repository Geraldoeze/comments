import classes from "./styless.module.css";
import Image from "next/dist/client/image";
import Modal from "../Modal/Modal";
import {useState, useContext} from  'react';
import { PostContext } from "../../../hook/context-hook";


const Icons = ({ creator, user, openButton, IDE }) => {

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
    if(typeof IDE?.replies === 'string') {
      deleteContents(IDE.ide)
      // send comment request
      const response = await fetch(`${process.env.BACKEND_URL}/com/del/${IDE.ide}`,{
        method: "DELETE", 
        
      })
      const data = response.json();
      console.log(data);

    } else if (typeof IDE?.replyingTo === 'string'  ) {
      deleteReply(IDE.ide)
      // send replies request
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
  <div className={classes.btn_icon && creator && classes.reply}>
      {!(creator[0].username === user.username) ? (
        <div className={classes.img_reply}>
          <p
            onClick={buttonID}
            id={IDE.ide}
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
            id={IDE.ide}
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
