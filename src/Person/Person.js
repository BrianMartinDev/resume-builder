import React, { Component } from 'react'

const person = (props) => {
    return(
        <div>
            <p >I am {props.name} a person and I am age {props.age}</p>
            <p>{props.children}</p>
            
        </div>
    )
    
};
const name = "sdsa";
 
export default person;