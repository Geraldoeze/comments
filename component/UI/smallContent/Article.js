import classes from './styless.module.css'


const Article = ({articleData}) => {
    return ( 
        <div className={classes.article}>
            {articleData}
        </div>
     );
}
 
export default Article;