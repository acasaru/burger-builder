import React from 'react'
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary'
import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props)=>(
    <Auxiliary>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
        <div className={classes.Modal} 
            style={{transform:props.show? 'translateY(0)': 'translateY(-100vh)',
            opacity:props.show?'1': '0'}}>
            {props.children}
        </div>
    </Auxiliary>
);

export default Modal;