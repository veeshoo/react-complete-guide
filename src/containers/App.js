import React, { Component } from 'react';
import classes from './App.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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
    let persons = null;
    if(this.state.showPersons){
      persons =  <Persons persons={this.state.persons} 
                  clicked={this.deletePersonHandler}
                  changed={this.nameChangeHandler}/>;
    }

    return (
      <div className={classes.App}>
        <Cockpit 
            persons={this.state.persons}
            showPersons={this.state.showPersons}
            clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  }
}

export default App;