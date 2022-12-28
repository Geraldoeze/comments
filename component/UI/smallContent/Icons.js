import classes from "./styless.module.css";
import Image from "next/dist/client/image";
import Modal from "../Modal/Modal";
import {useState} from  'react';


const Icons = ({ creator, user, openButton, IDE }) => {

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
    console.log(IDE)
    const Body = {
      id: IDE._id
    }
    console.log(IDE._id)
    if(typeof IDE?.replies === 'string') {
      // send comment request
      const response = await fetch(`/api/Comment/${IDE._id}`,{
        method: "DELETE", 
        
      })
      const data = response.json();
      console.log(data);

    } else if (typeof IDE?.replyingTo === 'string'  ) {
      // send replies request
      const response = await fetch(`/api/Replies/${IDE._id}`,{
        method: "DELETE"
      })
      const data = response.json();
      console.log(data);
    }
    window.location.reload();
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
