import Article from "./Article";
import ButtonBig from "./ButtonBig";
import Heading from "./Heading";
import classes from './BigEnd.module.css'


const BigEnd = () => {
    return (
        <div className={classes.Bigend}>
            <ButtonBig />
            <div>
                <Heading />
                <Article />
            </div>
        </div>
      );
}
 
export default BigEnd;