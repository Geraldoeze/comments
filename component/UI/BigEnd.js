import Article from "./Article";
import ButtonBig from "./ButtonBig";
import Heading from "./Heading";
import classes from './BigEnd.module.css'


const BigEnd = () => {
    return (
        <div className={classes.Bigend}>
            <ButtonBig />
            <div className={classes.content}>
                <Heading />
                <Article />
            </div>
        </div>
      );
}
 
export default BigEnd;