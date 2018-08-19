import React, { PureComponent } from 'react';
import classes from './App.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClassFunction';

export const AuthContext = React.createContext(false);

class App extends PureComponent {
  constructor(props){
    super(props);
    console.log("[App.js] Inside the constructor", props);
  }

  componentWillMount(){
    console.log("[App.js] component will mount");
  }

  componentDidMount() {
    console.log("[App.js] Component mounted");
  }

  // shouldComponentUpdate(nextProps, nextState){
  //     console.log("[Update App.js] Inside shouldComponentUpdate", nextProps, nextState);
  //     return nextState.persons !== this.state.persons ||
  //       nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState){
      console.log("[Update App.js] Inside componentWillUpdate", nextProps, nextState);
  }

  static getDerivedStateFromProps(nextProps, prevState){
    console.log("[Update App.js] Inside getDerivedStateFromProps", nextProps, prevState);
    return prevState;
  }

  getSnapshotBeforeUpdate(){
    console.log("[Update App.js] Inside getSnapshotBeforeUpdate",  this.props, this.state);
  }

  componentDidUpdate(){
      console.log("[Update App.js] Inside componentDidUpdate",  this.props, this.state);
  }


  state = {
    persons: [
      {id: "abc1", name: "Vishal", age:41},
      {id: "abc2", name: "Garima", age: 37},
      {id: "abc3", name: "Preeyal", age: 11}
    ],
    showPersons: false,
    toggleClicked: 0,
    authenticated: false
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
    this.setState((prevState, props) => {
      return {
        showPersons: !doesView,
        toggleClicked: prevState.toggleClicked + 1
      }});
  };

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  loginHandler = () => {
    this.setState({authenticated: true});
  }


  render() {
    console.log("[App.js] Rendering");
    let persons = null;
    if(this.state.showPersons){
      persons =  <Persons persons={this.state.persons} 
                  clicked={this.deletePersonHandler}
                  changed={this.nameChangeHandler}/>;
    }

    return (
      <React.Fragment>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit 
            appTitle={this.props.title}
            persons={this.state.persons}
            showPersons={this.state.showPersons}
            login={this.loginHandler}
            clicked={this.togglePersonsHandler} />
        <AuthContext.Provider value={this.state.authenticated}>
          {persons}
        </AuthContext.Provider>
      </React.Fragment>
    );
  }
}

export default withClass(App, classes.App);