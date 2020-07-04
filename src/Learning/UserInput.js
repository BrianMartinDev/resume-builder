import React, { Component } from 'react'

const userInput = (props) => {
    return <input type="text" 
    class="form-control"
    onChange={props.changed} 
    value={props.currentName} />

};

export default userInput;