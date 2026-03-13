import React from "react";
import css from "./style.module.css";

const Course = (props) => {
  return (
    <div className={css.Course}>
      <p>
        <strong>Сургалт: </strong>
        Нэр: {props.course.levels.name}, Хугацаа: {props.course.schedule}, Багш:{" "}
        {props.course.levels.teacher}, Зураг: {props.course.levels.image}
      </p>
      <p>
        <strong>Үнийн дүн: </strong>
        {props.course.price} ₮
      </p>
    </div>
  );
};

export default Course;
