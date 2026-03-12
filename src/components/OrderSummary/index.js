import React from "react";
import Button from "../General/Button";

const OrderSummary = props => {
    return (
    <div>
        <h3>Таны захиалга</h3>
        <p>Таны сонгосон орцууд: </p>
        <ul>
            {Object.keys(props.ingredients).map(el =>
                <li key={el}>{props.ingredientNames[el]}: {props.ingredients[el]}</li>
            )}
        </ul>
        <p><strong>Захиалгын дүн: {props.price} ₮</strong></p>
        <p>Та цааш нь үргэлжлүүлэх үү ?</p>
        <Button daragdsan={props.onCancel} btnType="Danger" text="ТАТГАЛЗАХ"/>
        <Button daragdsan={props.onContinue} btnType="Success" text="ЗӨВШӨӨРӨХ"/>
    </div>
    );
};

export default OrderSummary;