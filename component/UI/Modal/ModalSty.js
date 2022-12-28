import styled from "styled-components";

export const StyledModalBody = styled.div`
display: block;
margin: 0.4rem 0;
width: 100%;
text-align: center;
`;

export const StyledModalTitle = styled.p `
font-size: 15px;
color: var(--color-grayish-blue);
margin: 0 0.5rem;

`
export const StyledModalButton = styled.button`
height: 30px;
widith: 70px;
color: #fff;
background-color: var(--color-grayish-blue);
border:0;

border-radius: 5px;
margin: 0.5rem 0.6rem;
cursor: pointer;
`

export const StyledModalButtonRed = styled.button`
height: 30px;
widith: 70px;
color: #fff;
background-color: var(--color-soft-red);
border:0;
border-radius: 5px;
margin: 0.5remrem 0.6rem;
cursor: pointer;
`


export const StyledModalHeader = styled.div`
display: flex;
justify-content: flex-start;
font-size: 18px;
font-weight: 900;
letter-spacing: 1px;
color: var(--color-dark-blue);
margin: 0.3rem 0.5rem; 
`;

export const StyledModal = styled.div`
background: white;
width: 250px;
height: 150px;
border-radius: 5px;
padding: 15px;
`;
export const StyledModalOverlay = styled.div`
position: fixed;
top: 50%;
left: 50%;
width: 100%;
height: 100vh;
transform: translate(-50%,-50%);
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(0, 0, 0, 0.5);
`;