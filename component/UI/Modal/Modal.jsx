import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

import {StyledModalBody, StyledModalHeader, StyledModalButton, StyledModalButtonRed, StyledModalTitle, StyledModal, StyledModalOverlay} from './ModalSty';


function Modal({show, children, Header, title, onClose, deleteHandler}) {
    const [isBrowser, setIsBrowser] = useState(false);

  
    useEffect(() => {
      setIsBrowser(true);
    }, []);

    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
      };
    
      const modalContent = show ? (
        <StyledModalOverlay>
          <StyledModal>
            <StyledModalHeader>
             {Header}
            </StyledModalHeader>
            {title && <StyledModalTitle>{title}</StyledModalTitle>}
            <StyledModalBody>{children}</StyledModalBody>
                {Header && 
                    <StyledModalBody>
                        <StyledModalButton onClick={handleCloseClick}>NO, CANCEL</StyledModalButton>
                        <StyledModalButtonRed onClick={deleteHandler}>YES, DELETE</StyledModalButtonRed>
                    </StyledModalBody>
                }
            
            
            
            
          </StyledModal>
        </StyledModalOverlay>
      ) : null;
    if (isBrowser) {
        return ReactDOM.createPortal(
            modalContent,
            document.getElementById("modal-root")
        );
      } else {
        return null;
      }    
  
}




export default Modal;