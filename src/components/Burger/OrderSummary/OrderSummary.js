import React from 'react'
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary'
import Button from '../../UI/Button/Button'



const OrderSummary = (props)=>{
    console.log(props)
    const ingredientSummary = Object.keys(props.ingredients).map(
        key=> {return (
            <li key={key}>
                <span style={{textTransform:'capitalize'}}>{key}</span>:{props.ingredients[key]}
            </li>
        )}
    )
    return(
        <Auxiliary>
            <h3>Your Order</h3>
            <p>A burger with the following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total price: {props.totalPrice.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button buttonType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button buttonType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
        </Auxiliary>
    )
}

export default OrderSummary