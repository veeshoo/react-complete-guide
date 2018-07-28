import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Vishal", age:"41"},
      {name: "Garima", age:"37"},
      {name: "Preeyal", age:"11"}
    ],
    showPersons: false
  };

  switchNameHandler = (newName) => {
    //console.log('I am Clicked');
    this.setState({
      persons: [
        {name: newName, age:"41"},
        {name: "Garima", age:"37"},
        {name: "Preeyal", age:"12"}
      ]
    });
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: "Vishal", age:"41"},
        {name: event.target.value, age:"37"},
        {name: "Preeyal", age:"12"}
      ]
    });
  }

  togglePersonsHandler = () => {
    const doesView = this.state.showPersons;
    this.setState({showPersons: !doesView});
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'   
    }

    return (
      <div className="App">
        <h1>Hi, I am a React App!</h1>
        <p>This is really working.</p>
        <button style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {
          this.state.showPersons?
          <div>
            <Person name={this.state.persons[0].name} 
                    age={this.state.persons[0].age}
                    changed={this.nameChangeHandler}>My Hobbies: Reading about Space</Person>
            <Person name={this.state.persons[1].name} 
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this, "Baba")}
                    changed={this.nameChangeHandler}/>
            <Person name={this.state.persons[2].name} 
                    age={this.state.persons[2].age}>I don't have any hobbies</Person>
          </div> : null
        }
      </div>
    );
  }
}

export default App;
