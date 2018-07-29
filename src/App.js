import React, { Component } from 'react';
import './App.css';

import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: "abc1", name: "Vishal", age:"41"},
      {id: "abc2", name: "Garima", age:"37"},
      {id: "abc3", name: "Preeyal", age:"11"}
    ],
    showPersons: false
  };

  nameChangeHandler = (event, personId) => {
    const personIndex = this.state.persons.findIndex(p => {
        return p.id===personId;
    })

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({persons});
  }

  togglePersonsHandler = () => {
    const doesView = this.state.showPersons;
    this.setState({showPersons: !doesView});
  };

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  render() {
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null;
    if(this.state.showPersons){
      persons = 
        <div>
          {this.state.persons.map((person, index) => {
              return <Person click={() => this.deletePersonHandler(index)}
                        name={person.name} 
                        age={person.age} 
                        key={person.id}
                        changed={(event) => this.nameChangeHandler(event, person.id)}/>;
          })}
        </div>
      ;
      style.backgroundColor='red';
      style[':hover'] = {
        backgroundColor: 'lightcoral',
        color: 'black'
      };
    }

    const classes = [];
    if(this.state.persons.length<=2){
      classes.push('red');
    }
    if(this.state.persons.length<=1){
      classes.push('bold');
    }

    return (
      <StyleRoot>
      <div className="App">
        <h1>Hi, I am a React App!</h1>
        <p className={classes.join(' ')}>This is really working.</p>
        <button style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
