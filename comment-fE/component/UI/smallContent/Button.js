import { HiPlus, HiMinus } from "react-icons/hi";
import classes from "./styless.module.css";

import { useState, useEffect } from "react";
import { useHttpClient } from "../../../hook/http-hook";

const Button = ({ number, creatorID }) => {
  const [score, setScore] = useState(number);
  const { sendRequest, isLoading } = useHttpClient();

  // send fetch patch request
  const updateScoreHandler = async (num) => {
    const scoress = {
      score: num,
      ide: creatorID.ide,
    };
    try {
      if (typeof creatorID?.replies === "string") {
        // send comment request
        await sendRequest(
          `${process.env.BACKEND_URL}/com/point`,
          "PUT",
          JSON.stringify(scoress)
        );
      } else if (typeof creatorID?.replyingTo === "string") {
        // send replies request
        await sendRequest(
          `${process.env.BACKEND_URL}/rep/point`,
          "PUT",
          JSON.stringify(scoress)
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  const addNumber = () => {
    const num = score + 1;
    setScore((prev) => prev + 1);
    updateScoreHandler(num);
  };

  const minusNumber = () => {
    if (score === 0) {
      return 0;
    } else if (score >= 1) {
      const num = score - 1;
      setScore((prev) => prev - 1);
      updateScoreHandler(num);
    }
  };
  return (
    <div className={classes.btn_select}>
      <button>
        <p onClick={addNumber} className={classes.btn_plus}>
          <HiPlus />
        </p>
      </button>
      <h3 className={classes.h3em}>{score}</h3>
      <button>
        <p onClick={minusNumber} className={classes.btn_plus}>
          <HiMinus />
        </p>
      </button>
    </div>
  );
};

export default Button;
