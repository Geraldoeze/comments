import Article from "../smallContent/Article";
import ButtonBig from "./ButtonBig";
import BigHeading from '../BigContent/BigHeading'
import classes from './BigEnd.module.css'


const BigEnd = () => {
    return (
        <div className={classes.Bigend}>
            <ButtonBig />
            <div className={classes.content}>
                <BigHeading />
                <Article />
            </div>
        </div>
      );
}
 
export default BigEnd;