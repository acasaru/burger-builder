import React from 'react'
import classes from './Button.module.css'


const Button = (props)=>{
    const asignedClasses = [classes.Button, classes[props.buttonType]].join(' ')
    return (
        <button
            className={asignedClasses}
            onClick={props.clicked}>
                {props.children}
        </button>
    );
}

export default Button