import classes from "./styless.module.css";

const Article = ({ articleData, replyTo }) => {
  const replyingTo = "@" + replyTo;

  return (
    <div className={classes.article}>
      {replyTo && (
        <span
          style={{ color: "var(--color-moderate-blue)", fontWeight: "bold" }}
        >
          {replyingTo}{" "}
        </span>
      )}
      {articleData}
    </div>
  );
};

export default Article;
