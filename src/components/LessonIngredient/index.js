import React from "react";
import css from "./style.module.css";

const LessonIngredient = (props) => {
  if (props.type === "book-top")
    return (
      <div className={css.BookTop}>
        <div className={css.Linie}></div>
        <div className={`${css.Linie} ${css.Second}`}></div>
        <div className={`${css.Linie} ${css.Third}`}></div>
      </div>
    );
  if (props.type === "primary") return <div className={css.Primary}></div>;
  if (props.type === "intermediate")
    return <div className={css.Intermediate}></div>;
  if (props.type === "advanced") return <div className={css.Advanced}></div>;
  if (props.type === "proficiency")
    return <div className={css.Proficiency}></div>;
  if (props.type === "ielts") return <div className={css.IELTS}></div>;
  if (props.type === "toefl") return <div className={css.TOEFL}></div>;
  if (props.type === "book-bottom")
    return <div className={css.BookBottom}></div>;
  else return <div></div>;
};

export default LessonIngredient;
