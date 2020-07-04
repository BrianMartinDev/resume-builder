import React, { useState, Component } from "react";
// import Person from "./Person/Person";
// import Home from "./Home/Home";

import UserInput from "./Learning/UserInput";
import UserOutput from "./Learning/UserOutput";

class App extends Component {
 
  state = [{
    username: 'supermax',
  }]
 


 
  setPersonState = (event) => {
    this.setState({username: event.target.value});
  }
 


 render() {
  return (
    <div>
      {/* <Home />
      <button
        type="button"
        className="btn btn-info"
        onClick={switchNameHandler}
      >
        Switch Name
        </button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      /> */}
      <UserInput changed={this.setPersonState} currentName={this.state.username}/>
      <UserOutput username={this.state.username} />
      <UserOutput username={this.state.username} />
      <UserOutput username="Max" />
    </div>

  );
 };

};

// const [personsState, setPersonsState] = useState({
//   persons: [
//     {
//       name: "Max",
//       age: 12,
//     },
//   ],
//   otherState: "some other state",
// });

// const switchNameHandler = () => {
//   setPersonsState({
//     persons: [
//       {
//         name: "Maxs1",
//         age: 0,
//       },
//     ],
//   });
//   console.log(personsState);

// };
export default App;


