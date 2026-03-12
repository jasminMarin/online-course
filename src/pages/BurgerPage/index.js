import React, { Component } from "react";
import Burger from "../../components/Burger"
import BuildControls from "../../components/BuildControls";
import Modal from "./../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
import axios from "../../axios.orders";
import Spinner from "../../components/General/Spinner";

const INGREDIENT_PRICES = {salad : 150, cheese: 200, bacon: 170, meat:350};
const INGREDIENT_NAMES = {
        salad: "Салад", 
        cheese: "Бяслаг", 
        meat: "Үхрийн мах", 
        bacon: "Гахайн мах"
    };

class BurgerPage extends Component {
    state = {
        ingredients : {
            "salad" : "1",
            "cheese": "1",
            "bacon": "1",
            "meat": "1"
        },
        totalPrice: 1000,
        purchasing: false,
        confirmOrder: false
    }

    componentDidMount = () => {
        };

    ortsNemeh = type => {
        const newIngredients = {...this.state.ingredients};
        newIngredients[type]++;
        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type]
        this.setState({
            purchasing: true,
            totalPrice: newPrice, 
            ingredients: newIngredients})
    }

    ortsHasah = type => {
        if(this.state.ingredients[type] > 0) {
        const newIngredients = {...this.state.ingredients};
        newIngredients[type]--;
        const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type]
        this.setState({
            purchasing: newPrice > 1000,
            totalPrice: newPrice, 
            ingredients: newIngredients
        });
        }
    }

    showConfirmModal = () => {
        this.setState({confirmOrder: true});
    }

    closeConfirmModal = () => {
        this.setState({confirmOrder: false});
    }

    continueOrder = () => {
        const order = {
            orts: this.state.ingredients,
            dun: this.state.totalPrice,
            hayg: {
                name: "Amaraa",
                city: "Ub",
                street: "10-r khoroolol 23-10"
            }
        };
        this.setState({loading: true});
        axios
            .post("/orders.json", order)
            .then(response => {
            }).finally(() => {
                this.setState({loading: false});
            });
    }

    render() {
        const disabledIngredients = {...this.state.ingredients};
        for(let key in disabledIngredients) {
            disabledIngredients[key] = disabledIngredients[key] <= 0;
        }

        return( 
            <div>
                <Modal closeConfirmModal={this.closeConfirmModal} show={this.state.confirmOrder}>
                    {this.state.loading ? (<Spinner /> ) : (<OrderSummary 
                    ingredientNames={INGREDIENT_NAMES}
                    ingredients={this.state.ingredients}
                    price={this.state.totalPrice}
                    onCancel={this.closeConfirmModal}
                    onContinue={this.continueOrder}
                    />)}
                </Modal>
                <Burger orts = {this.state.ingredients}/>
                <BuildControls 
                ingredientNames={INGREDIENT_NAMES}
                price={this.state.totalPrice} 
                disabledIngredients={disabledIngredients} 
                ortsNemeh={this.ortsNemeh} 
                ortsHasah={this.ortsHasah}
                disabled={!this.state.purchasing}
                showConfirmModal={this.showConfirmModal}/>
            </div>
            );
    }
}
export default BurgerPage;