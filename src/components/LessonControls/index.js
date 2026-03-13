import React from "react";
import LessonControl from "../LessonControl";
import css from "./style.module.css";

const LessonControls = (props) => {
  return (
    <div className={css.LessonControls}>
      <p>
        Сургалтын үнэ: <strong>{props.price} ₮</strong>
      </p>
      {Object.keys(props.levelNames).map((el) => (
        <LessonControl
          key={el}
          disabled={props.disabledlevels}
          levelsNemeh={props.levelsNemeh}
          levelsHasah={props.levelsHasah}
          type={el}
          levels={props.levelNames[el]}
        />
      ))}
      ;
      <button
        onClick={props.showConfirmModal}
        disabled={props.disabled}
        className={css.OrderButton}
      >
        ЗАХИАЛАХ
      </button>
    </div>
  );
};

export default LessonControls;
