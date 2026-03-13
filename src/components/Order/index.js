import React from "react";
import css from "./style.module.css";

const Order = (props) => {
  return (
    <div className={css.Order}>
      <p>
        <strong>Сургалт: </strong>
        Нэр: {props.order.orts.нэр}, Хугацаа: {props.order.orts.хугацаа}, Багш:{" "}
        {props.order.orts.багш}, Зураг: {props.order.orts.зураг}
      </p>
      <p>
        <strong>Хаяг: </strong> {props.order.hayg.name} |{" "}
        {props.order.hayg.street} | {props.order.hayg.city}
      </p>
      <p>
        <strong>Үнийн дүн: </strong>
        {props.order.dun} ₮
      </p>
    </div>
  );
};

export default Order;
