import React from "react";
import css from "./style.module.css";

const Order = (props) => {
    return(<div className={css.Order}>
        <p><strong>Орц: </strong> 
        Гахайн мах: {props.order.orts.bacon}, Бяслаг: {props.order.orts.cheese}, 
        Үхрийн мах: {props.order.orts.meat}, Салад: {props.order.orts.salad}
        </p>
        <p><strong>Хаяг: </strong> {props.order.hayg.name} | {props.order.hayg.street} | {props.order.hayg.city}</p>
        <p><strong>Үнийн дүн: </strong>{props.order.dun} ₮</p>
    </div>)
}

export default Order