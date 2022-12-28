import classes from "./styless.module.css";

import Icons from "./Icons";
import Button from "./Button";

const ButtonSelect = ({ score, currentUser, userData, show, creatorID }) => {
  return (
    <div className={classes.btn}>
      <Button number={score} creatorID={creatorID} />
      <Icons openButton={show} IDE={creatorID} creator={currentUser} user={userData} />
    </div>
  );
};

export default ButtonSelect;
