import React from "react";
import Button from "../General/Button";

const OrderSummary = (props) => {
  return (
    <div>
      <h3>Таны захиалга</h3>
      <p>Таны сонгосон хичээлүүд: </p>
      <ul>
        {Object.keys(props.levels).map((el) => (
          <li key={el}>
            {props.levelNames[el]}: {props.levels[el]}
          </li>
        ))}
      </ul>
      <p>
        <strong>Захиалгын дүн: {props.price} ₮</strong>
      </p>
      <p>Та цааш нь үргэлжлүүлэх үү ?</p>
      <Button daragdsan={props.onCancel} btnType="Danger" text="ТАТГАЛЗАХ" />
      <Button daragdsan={props.onContinue} btnType="Success" text="ЗӨВШӨӨРӨХ" />
    </div>
  );
};

export default OrderSummary;
