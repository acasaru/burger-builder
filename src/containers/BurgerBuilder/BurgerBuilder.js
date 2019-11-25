import React from 'react'
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';


const INGREDIENT_PRICES ={
    salad:0.5,
    cheese:0.7,
    meat:1.2,
    bacon:0.8
};

class BurgerBuilder extends React.Component{
    state={
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice : 4,
        purchasable:false,
        purchasing:false,
    };
    
    addIngredientHandler = this.addIngredientHandler.bind(this);
    removeIngredientHandler = this.removeIngredientHandler.bind(this);
    purchaseHandler = this.purchaseHandler.bind(this);

    addIngredientHandler(type){
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount +1;
        const newIngredients = {
            ...this.state.ingredients
        };
        newIngredients[type] = newCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({totalPrice:newPrice, ingredients:newIngredients})

        this.updatePurchaseState(newIngredients)
    };

    removeIngredientHandler(type){
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount - 1;
        if(newCount<0)
            return;

        const newIngredients = {
            ...this.state.ingredients
        };
        newIngredients[type] = newCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({totalPrice:newPrice, ingredients:newIngredients})

        this.updatePurchaseState(newIngredients)
    }

    updatePurchaseState(newIngredients){
        let ingredientsCopy = {
            ...newIngredients
        }
        let sum = Object.keys(ingredientsCopy)
            .map(key=>ingredientsCopy[key])
            .reduce((sum, el)=> sum + el, 0);
        console.log(ingredientsCopy);
        console.log(sum);
        this.setState({purchasable: (sum>0)})

    }

    purchaseHandler(){
        this.setState({purchasing:true})
    }

    purchaseCancelHandler = ()=>{
        this.setState({purchasing:false})
    }

    purchaseContinueHandler = ()=>{
        alert('Continue')
    }

    render(){
        const disableInfo ={
            ...this.state.ingredients
        }
        for(let key in disableInfo){
            disableInfo[key] = (disableInfo[key]<=0)
        }
        console.log(disableInfo);
        
        return(
          <Auxiliary>
              <Modal show={this.state.purchasing} 
                     modalClosed={this.purchaseCancelHandler}>
                  <OrderSummary ingredients={this.state.ingredients}
                     purchaseCancelled={this.purchaseCancelHandler}
                     purchaseContinue={this.purchaseContinueHandler}
                     totalPrice={this.state.totalPrice}>
                  </OrderSummary>
              </Modal>
              <Burger ingredients={this.state.ingredients}/>
              <BuildControls 
                addIngredient={this.addIngredientHandler} 
                removeIngredient={this.removeIngredientHandler}
                disableInfo = {disableInfo}
                totalPrice ={this.state.totalPrice}
                purchasable={this.state.purchasable}
                purchase={this.purchaseHandler}
                />
          </Auxiliary> 
        );
    }
}

export default BurgerBuilder