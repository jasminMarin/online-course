import React from "react";
import css from "./style.module.css";
const LessonControl = (props) => (
  <div className={css.LessonControl}>
    <div className={css.Label}>{props.levels}</div>
    <button
      disabled={props.disabled[props.type]}
      onClick={() => props.levelsHasah(props.type)}
      className={css.Less}
    >
      Хасах
    </button>
    <button onClick={() => props.levelsNemeh(props.type)} className={css.More}>
      Нэмэх
    </button>
  </div>
);

export default LessonControl;
