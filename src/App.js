import React, { Component } from "react";
import { MyContext } from "./context";
import Counter from "./componentsOnHooks/counter";
import Form from "./componentsOnHooks/form";
import Coordinates from "./componentsOnHooks/coordinates";
import { Avatar } from "./components/avatar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">React Hooks Exercises</h1>
        <div className="exercise-list">
          <div className="exercise-container">
            <h3 className="exercise-title">Exercise 1 - Counter</h3>
            <Counter />
          </div>
          <div className="exercise-container">
            <h3 className="exercise-title">Exercise 2 - Form</h3>
            <Form />
          </div>
          <div className="exercise-container">
            <h3 className="exercise-title">Exercise 3 - Coordinates</h3>
            <Coordinates />
          </div>
          <MyContext.Provider value={{ user: "JSCoders" }}>
            <div className="exercise-container">
              <h3 className="exercise-title">Exercise 4 - Context</h3>
              <Avatar />
            </div>
          </MyContext.Provider>
        </div>
      </div>
    );
  }
}

export default App;
