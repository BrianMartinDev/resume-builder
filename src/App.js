import React, { useState } from "react";
import Person from "./Person/Person";
import Home from "./Home/Home";

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      {
        name: "Max",
        age: 12,
      },
    ],
    otherState: "some other state",
  });

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        {
          name: "Maxs1",
          age: 0,
        },
      ],
    });  
    console.log(personsState);
 
  };

  return (
    <div>
      <Home/>
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
      />
    </div>
    
  );
 
}

export default App;


