import classes from "./BigEnd.module.css";
import style from "./styleBig.module.css";
import Image from "next/image";
import BigIcon from "../BigContent/BigIcon";
import { createdAT } from "../../../data/createdAt";

const BigHeading = ({
  currentUser,
  create,
  headData,
  valuee,
  showButton,
  creatorID,
}) => {
  const imageSrc = headData.image.png;
  // This removes the dot ./ so that next can access the image from public folder
  const imageContent = imageSrc.slice(1, imageSrc.length);
  // const TimeStamp = createdAT(create);
  return (
    <div className={classes.BigHeading}>
      <Image src={imageContent} width={"35px"} height={"35px"} alt="vero" />
      <h4 className={style.Bigheading_name}>{headData.username}</h4>
      {currentUser[0].username === headData.username && (
        <span className={style.Bigcreator_span}>you</span>
      )}
      {/* <p className={style.Bigheading_time}>{TimeStamp}</p> */}

      <BigIcon
        openButton={showButton}
        creator={currentUser}
        IDE={creatorID}
        user={valuee.user}
      />
    </div>
  );
};

export default BigHeading;
