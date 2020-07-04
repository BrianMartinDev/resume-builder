import React, { Component } from 'react'

 const userOutput = (props) => {
     return(
         <div>
             <p>Username: { props.username } </p>
             <p>Overwritten text</p>
         </div>
     )
 };

 export default userOutput;