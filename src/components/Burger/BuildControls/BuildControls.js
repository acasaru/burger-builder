import React from 'react'
import classes from '../BuildControls/BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls =[
    {label:'Salad', type:'salad'},
    {label:'Cheese', type:'cheese'},
    {label:'Bacon', type:'bacon'},
    {label:'Meat', type:'meat'}
]
const BuildControls = (props) =>(
    <div className={classes.BuildControls}>
        <p>Total price: {props.totalPrice.toFixed(2)}</p>
        {controls.map(control=>(
            <BuildControl 
                key={control.label} 
                label={control.label} 
                addIngredient={()=>props.addIngredient(control.type)}
                removeIngredient={()=>props.removeIngredient(control.type)}
                disableInfo = {props.disableInfo[control.type]}
            />
        ))}
        <button 
            className={classes.OrderButton} 
            onClick={props.purchase}
            disabled={!props.purchasable}>Order Now</button>
    </div>
)

export default BuildControls;
