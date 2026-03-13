import React from "react";
import LessonIngredient from "../LessonIngredient";
import css from "./style.module.css";
import { useNavigate } from "react-router-dom";

const Lesson = (props) => {
  const navigate = useNavigate();
  const items = Object.entries(props.levels);
  let content = [];
  items.map((el) => {
    for (let i = 0; i < el[1]; i++) {
      content.push(<LessonIngredient key={`${el[0]}${i + 1}`} type={el[0]} />);
    }
  });
  if (content.length === 0) {
    content = <p>Та сургалтынхаа хичээлүүдийг сонгоно уу ...</p>;
  }
  return (
    <div className={css.Lesson}>
      <LessonIngredient type="book-top" />
      {content}
      <LessonIngredient type="book-bottom" />
    </div>
  );
};
export default Lesson;
