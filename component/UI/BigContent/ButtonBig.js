import { HiPlus, HiMinus } from "react-icons/hi";
import {useState, useEffect} from 'react';
import classes from "./styleBig.module.css";
import { useHttpClient } from "../../../hook/http-hook";

const ButtonBig = ({ number, creatorID }) => {
  const { sendRequest, isLoading } = useHttpClient();
  const [score, setScore] = useState(number)

  useEffect(() => {
    // send fetch patch request
    const updateScoreHandler = async () => {
      const scoress = {
        score: score,
        id: creatorID._id
      }
      try {
      if(typeof creatorID?.replies === 'string') {
        // send comment request
        const response = await sendRequest(`/api/Comment/`, "PUT", JSON.stringify(scoress))
        
      } else if (typeof creatorID?.replyingTo === 'string'  ) {
        // send replies request
        const response = await sendRequest(`/api/Replies/`, "PUT", JSON.stringify(scoress))
      } 
    } catch (err) {
      console.log(err)
    }
    }
    updateScoreHandler()
    
  }, [score])

  let scores;

  const addNumber = async () => {
    scores = setScore((prev) => prev + 1) 
  }

  const minusNumber =() => {
    if(score === 0) {
      return 0
    } else if (score >= 1) {
      setScore((prev) => prev - 1)
    }
    
  }

  return (
    <div className={classes.btn_bg_select}>
      <p onClick={addNumber} className={classes.btn_bg_plus}>
        <HiPlus />
      </p>
      <h3 className={classes.h3em}>{score}</h3>
      <p onClick={minusNumber} className={classes.btn_bg_plus}>
        <HiMinus />
      </p>
    </div>
  );
};

export default ButtonBig;
