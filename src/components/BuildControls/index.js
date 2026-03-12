import React from "react";
import BuildControl from "../BuildControl";
import css from "./style.module.css"

const BuildControls = props => {
    return(
    <div className={css.BuildControls}>
        <p>Бургерийн үнэ: <strong>{props.price} ₮</strong>
        </p>
        {Object.keys(props.ingredientNames).map(el => (
            <BuildControl key={el}
                disabled={props.disabledIngredients} 
                ortsNemeh={props.ortsNemeh} 
                ortsHasah={props.ortsHasah} 
                type ={el} orts={props.ingredientNames[el]}/>
        ))};
        <button onClick={props.showConfirmModal} disabled={props.disabled} className={css.OrderButton}>ЗАХИАЛАХ</button>
    </div>
    );
}

export default BuildControls;